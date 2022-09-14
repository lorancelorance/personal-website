import clsx from 'clsx'

export interface Props {
  className?: string
}

const Biography = ({ className }: Props) => {
  return (
   
    <div className={clsx(className, 'flex justify-center')}>
      <div className={clsx(className,'p-6')}>
        <div className={clsx(className,'max-w-md')}>
      <div className={clsx('border b-2 rounded p-2')}>
      <span>Biography
        i am lorance from kilinochchi ,studying in uki codding school.i am also studying programing languages both frontend and backend here. i am intrest in cse field. so i will apply for a best cs company to continue my career after finishing my heigher studies in university.you can contact me with nitharsannitharsan05@gmail.com.
      </span>

      </div>
      </div>
      </div>
    </div>
    
  )
}

export default Biography
