import { DivBackground } from './style'

export const Modal = ({children}: {children: React.ReactNode;}) => {
  return (
    <DivBackground>
        {children}
    </DivBackground>
  )
}
