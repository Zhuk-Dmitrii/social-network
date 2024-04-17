type TProps = {
  children: React.ReactNode
}

export function Main({ children }: TProps) {
  return <main className="main">{children}</main>
}
