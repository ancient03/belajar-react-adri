import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpense from "../components/Fragments/CardExpense";
import { expensesService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";
import CircularProgress from '@mui/material/CircularProgress';

function ExpensePage() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      setIsLoading(true);
      const data = await expensesService();
      setExpenses(data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data expenses",
        severity: "error",
      });
      if (err.status === 401) {
        logout();
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="mb-8">
            <h2 className="text-2xl text-gray-02">Expenses Comparison</h2>
        </div>
        
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-48 text-primary">
            <CircularProgress color="inherit" size={50} enableTrackSlot />
            <div className="mt-2">Loading Data</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(Array.isArray(expenses) ? expenses : []).map((expense) => (
              <CardExpense key={expense.id || expense.category} expense={expense} />
            ))}
          </div>
        )}

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default ExpensePage;
