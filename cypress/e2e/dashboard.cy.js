describe("Halaman Dashboard (Overview)", () => {
  it("harus menampilkan semua komponen utama pada dashboard setelah berhasil login", () => {
    cy.viewport(1280, 720);

    // 1. User mengunjungi URL utama yang akan me-redirect ke halaman login jika belum terautentikasi
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    // 2. User memasukkan email dan password yang valid lalu menekan tombol login
    cy.get("input#email").type("hello@example.com");
    cy.get("input#password").type("123456");
    cy.get("button").contains("Login").click();

    // 3. Sistem mengarahkan user ke halaman Dashboard (Overview)
    cy.url().should("not.include", "/login");

    // 4. Verifikasi navigasi utama (sidebar) dan header telah muncul
    cy.get("aside").should("be.visible");
    cy.get("header").should("be.visible");

    // 5. Verifikasi semua bagian dashboard telah ter-render dengan baik
    // Menggunakan contains untuk mengecek judul-judul bagian
    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transaction").should("be.visible");
    cy.contains("Statistics").should("be.visible");
    cy.contains("Expenses Breakdown").should("be.visible");

    // 6. Verifikasi proses loading telah selesai dan data telah muncul
    // Memastikan animasi loading (seperti pada bagian Goals dan Bills) sudah tidak terlihat di layar
    cy.get(".MuiCircularProgress-root").should("not.be.visible");
  });
});
