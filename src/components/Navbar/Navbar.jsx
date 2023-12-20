import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  let expiresAfter = localStorage.getItem("expires_after");

  useEffect(() => {
    expiresAfter = localStorage.getItem("expires_after");
  }, [expiresAfter]);

  function LogoutUser() {
    console.log("Logout Called");
    localStorage.removeItem("expires_after");
    navigate("/login");
  }

  return (
    <Disclosure as="nav" className="bg-gray-700">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  {/* Mobile Logo */}
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://reunion-one.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb4581989-6ee2-4450-8eb5-9d6751899f8b%2F500x500_-_reunion_-_vertical.jpg?table=block&id=d8eb44c3-9e5e-46b6-b2b9-a1e0db07a5de&spaceId=ca71608c-1cc3-4167-857a-24da97c78717&width=250&userId=&cache=v2"
                    alt="Reunion"
                  />
                  {/* Desktop Logo */}
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://reunion-one.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb4581989-6ee2-4450-8eb5-9d6751899f8b%2F500x500_-_reunion_-_vertical.jpg?table=block&id=d8eb44c3-9e5e-46b6-b2b9-a1e0db07a5de&spaceId=ca71608c-1cc3-4167-857a-24da97c78717&width=250&userId=&cache=v2"
                    alt="Reunion"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                </div>
              </div>

              {!(expiresAfter !== null && Date.now() <= expiresAfter) && (
                <div className="items-center hidden md:flex">
                  <div className="flex-shrink-0">
                    <Link
                      to="/login"
                      className="relative mr-5 inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      Login
                    </Link>
                    <Link
                      to="/"
                      className="relative inline-flex items-center rounded-md border border-transparent bg-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      SignUp
                    </Link>
                  </div>
                </div>
              )}
              {expiresAfter !== null && Date.now() <= expiresAfter && (
                <div className="items-center hidden md:flex">
                  <div className="flex-shrink-0">
                    <Link
                      to="/login"
                      onClick={LogoutUser}
                      className="relative mr-5 inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>

              {!(expiresAfter !== null && Date.now() <= expiresAfter) && (
                <>
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Signup
                  </Link>
                </>
              )}

              {expiresAfter !== null && Date.now() <= expiresAfter && (
                <button
                  onClick={LogoutUser}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
