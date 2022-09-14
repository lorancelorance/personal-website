import SocialMedia from './SocialMedia'
import ukiLogo from './uki-logo.png'
import yarlItHubLogo from './yarl-it-hub-logo.png'

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <footer className={className}>
     <div className=" container mx-auto px-8 lg:px-16 py-8 gap-8 flex max-w-4xl flex-wrap">
      <div className="w-24 h-36 flex items-center min-w-fit flex-1 sm:flex-none">
      <img alt="Yarl IT Hub Logo" src={yarlItHubLogo} className="h-24" />
      </div>
      <div className="w-36 h-36 flex justify-center items-center">
      <img alt="Uki Coding School Logo" src={ukiLogo} className="h-min" />
      </div>
      <div className="flex-1 pt-8 min-w-fit">
      </div>
      <div className="flex-1 pt-8 min-w-fit">
          <div>Uki Coding School - Kilinochchi Center</div>
          <div>423 Thirunagar Road</div>
          <div>Class of 2022</div>
      </div>
      <div className="pt-8">
      <SocialMedia/>
      </div>  
     </div>
    </footer>
    
  )
}

export default Footer