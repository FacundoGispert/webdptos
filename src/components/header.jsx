import React from "react";

const Header = () => {
  return (
    <header className="bg-amber-200 py-8 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <a
            href="/"
            className="text-3xl font-bold text-amber-600 hover:text-amber-700"
          >
            ReservasVacaciones
          </a>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/destinos"
                className="text-gray-600 text-xl hover:text-gray-800"
              >
                Destinos
              </a>
            </li>
            <li>
              <a
                href="/hoteles"
                className="text-gray-600 text-xl hover:text-gray-800"
              >
                Hoteles
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="text-gray-600 text-xl hover:text-gray-800"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
