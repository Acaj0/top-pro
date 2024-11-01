import { Toast, ToastProvider, ToastViewport } from "@/components/ui/toast"
import { useToast as useToastOriginal } from "@/components/ui/toast"

export { ToastProvider, ToastViewport }
export { Toast, ToastAction, ToastClose, ToastDescription, ToastTitle } from "@/components/ui/toast"

// Ensure `export type` for types
export const useToast = useToastOriginal
export type { ToastActionElement, ToastProps } from "@/components/ui/toast"
