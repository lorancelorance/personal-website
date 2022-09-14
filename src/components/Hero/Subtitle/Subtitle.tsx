import clsx from 'clsx'
import Typed from 'react-typed'

export interface Props {
  className?: string
}

const Subtitle = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
     <Typed strings={['Web developer','Volleyball player','Music Lover','Traveller']}
     className="flex justify-center text-2xl font-system"
     loop
     typeSpeed={50}/>
    </div>
  )
}

export default Subtitle
