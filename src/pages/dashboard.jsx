import React, { useContext, useEffect, useState} from 'react'
import MainLayout from '../components/Layouts/MainLayout'
import Card from '../components/Elements/Card'
import CardBalance from '../components/Fragments/CardBalance'
import CardGoal from '../components/Fragments/CardGoal'
import CardUpcomingBill from '../components/Fragments/CardUpcomingBill'
import CardRecentTransaction from '../components/Fragments/CardRecentTransaction'
import CardStatistic from '../components/Fragments/CardStatistic'
import CardExpenseBreakdown from '../components/Fragments/CardExpenseBreakdown'
import { 
  expensesBreakdowns, 
  transactions,
  balances,
  expensesStatistics,
} from '../data';
import { goalService, billsService } from "../services/dataService";
import { AuthContext } from "../context/authContext";

import AppSnackbar from "../components/Elements/AppSnackbar";

function dashboard() {
  const [goals, setGoals] = useState({});
  const [bills, setBills] = useState([]);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  }); 
  
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };
  
  const [isLoadingGoals, setIsLoadingGoals] = useState(true);
  const [isLoadingBills, setIsLoadingBills] = useState(true);

  const fetchGoals = async () => {
    try {
      setIsLoadingGoals(true);
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      setSnackbar({ open: true, message: "Gagal mengambil data goals", severity: "error" });
      if (err.status === 401) {
        logout();
      }
    } finally {
      setIsLoadingGoals(false);
    }
  };

  const fetchBills = async () => {
    try {
      setIsLoadingBills(true);
      const data = await billsService();
      setBills(data);
    } catch (err) {
      setSnackbar({ open: true, message: "Gagal mengambil data bills", severity: "error" });
      if (err.status === 401) {
        logout();
      }
    } finally {
      setIsLoadingBills(false);
    }
  };

  useEffect(() => {
    fetchGoals();
    fetchBills();
  }, []);
  
  console.log(goals);
  
  return (
    
    <>
	  <MainLayout>
        <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">
          <div className="sm:col-span-4">
            <CardBalance data={balances} />
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals} isLoading={isLoadingGoals} />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills} isLoading={isLoadingBills} />
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions}/>
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics} />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns}/>
          </div>
        </div>

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  )
}

export default dashboard