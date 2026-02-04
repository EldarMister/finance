import { useRouter } from "next/navigation"
import { useState } from "react"

import useGetData from "./useGetData"
import { useDispatch } from "react-redux"
import { setDemoMode } from "@/redux/demo/reducer"

const useHandleDemoMode = () => {
  const router = useRouter()
  const { handleGetData } = useGetData()
  const [loadingDemo, setLoadingDemo] = useState(false)
  const dispatch = useDispatch()

  const fetchAuthDemoMode = async () => {
    setLoadingDemo(true)
    localStorage.setItem("demoMode", "true")
    dispatch(setDemoMode(true))
    await handleGetData()
    router.push("/")
    setLoadingDemo(false)
  }

  return { loadingDemo, fetchAuthDemoMode }
}

export default useHandleDemoMode
