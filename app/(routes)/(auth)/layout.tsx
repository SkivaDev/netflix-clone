export default function AuthLayout({ children }: Readonly<{children: React.ReactNode}> ) {
  return (
    <html lang="en" className="bg-zinc-900">
        <body>
            <p>holi</p>
            {children}
        </body>
    </html>
  );
}
