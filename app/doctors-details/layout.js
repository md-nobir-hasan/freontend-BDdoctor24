export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-cyan-100">
          {children}
          </body>
      </html>
    );
  }