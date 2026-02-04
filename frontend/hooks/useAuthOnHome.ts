import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import useGetData from "./useGetData"
import { setDemoMode } from "@/redux/demo/reducer"

const useAuthOnHome = () => {
  const router = useRouter()
  const pathName = usePathname()
  const { handleGetData } = useGetData()
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const publicRoutes = ["/login", "/signup"]

    if (publicRoutes.includes(pathName)) {
      setIsLoading(false)
      return
    }

    const checkAuth = async () => {
      const demoMode = localStorage.getItem("demoMode")
      if (demoMode !== "true") {
        localStorage.setItem("demoMode", "true")
        dispatch(setDemoMode(true))
      }
      await handleGetData()
      setIsLoading(false)
    }
    checkAuth()
  }, [router, pathName, handleGetData])

  return { isLoading }
}

export default useAuthOnHome
