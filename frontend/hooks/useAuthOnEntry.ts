import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// Hook for login and signup pages
const useAuthOnEntry = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const demoMode = localStorage.getItem("demoMode")
      if (demoMode === "true") {
        router.push("/")
        return
      }
      setIsLoading(false)
    }
    checkAuth()
  }, [router])

  return { isLoading }
}

export default useAuthOnEntry
