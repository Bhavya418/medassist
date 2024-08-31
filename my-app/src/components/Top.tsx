const Top = () => {
  return (
    <div className="flex flex-col items-center w-full space-y-2">
        <div className="flex items-center space-x-2 pb-6">
          <img
            src="/path-to-your-logo.png"
            alt="Fedora Healthcare Solutions Logo"
            className="h-12"
          />
          <div className="flex flex-col">
            <h1 className="text-5xl font-semibold text-blue-800 text-center">
              MEDASSIST HEALTHCARE SOLUTIONS
            </h1>
            <p className="text-left text-2xl font-thin">
              Revolutionizing RCM, Empowering Practices
            </p>
          </div>
        </div>
      </div>

  )
}

export default Top
