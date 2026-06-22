import { PropsWithChildren } from "react";
import { Sidebar, SidebarFooter, SidebarHeader, SidebarMain, SidebarNav, SidebarNavHeader, SidebarNavHeaderTitle, SidebarNavLink, SidebarNavMain } from "@/components/dashboard/sidebar";


export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-4">
      <Sidebar>
        <SidebarHeader>
          <h1 >My App</h1>
        </SidebarHeader>
        <SidebarMain>
          <SidebarNav>
            <SidebarNavMain>
              <SidebarNavLink href="/app/dashboard">Dashboard</SidebarNavLink>
              <SidebarNavLink href="/app/Alunos">Alunos</SidebarNavLink>
              <SidebarNavLink href="/app/planos">Planos</SidebarNavLink>
              <SidebarNavLink href="/app/pagamentos">Pagamentos</SidebarNavLink>
              <SidebarNavLink href="/app/professores">Professores</SidebarNavLink>
              <SidebarNavLink href="/app/relatórios">Relatórios</SidebarNavLink>
            </SidebarNavMain>
          </SidebarNav>
        </SidebarMain>

        <SidebarNav>
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>
              Shortcuts
            </SidebarNavHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink href="/app/configuracoes">Configurações</SidebarNavLink>
            <SidebarNavLink href="/app/ajuda">Ajuda</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarFooter>
          <h1>User</h1>
        </SidebarFooter>
      </Sidebar>
      <main>

        {children}
      </main>
    </div>
  )
}