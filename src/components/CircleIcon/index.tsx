import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import * as S from './styles'

interface CircleIconProps {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  variant?: S.CircleIconVariant
}

export function CircleIcon({ icon: Icon, variant = 'blue' }: CircleIconProps) {
  return (
    <S.CircleIconContainer variant={variant}>
      <Icon size={24} />
    </S.CircleIconContainer>
  )
}
