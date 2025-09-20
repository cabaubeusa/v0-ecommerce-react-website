"use client"

export default function Header({ onNavigate, user }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              onNavigate("home")
            }}
          >
            <div className="logo-icon">🌱</div>
            Anêmo
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              className="header-user-info"
              onClick={() => onNavigate(user?.type === "admin" ? "admin-dashboard" : "user-dashboard")}
            >
              <div className="user-icon">👤</div>
              <span>Olá, {user?.name || "Sr pipopopo :)"}</span>
            </div>
            <div className="cart-icon">🛒</div>
          </div>
        </div>
      </div>
    </header>
  )
}
