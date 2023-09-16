import { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // 모달 안에 클릭 시 닫지 않고 유지
      if(!ref.current || ref.current.contains(event.target)){
        return
      }
      // 모달 밖을 클릭 시 닫게 해줌
      handler()
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [])
  
}