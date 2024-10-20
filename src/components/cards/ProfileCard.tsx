import { memo } from 'react'

interface ProfileCardProps {
  title?: string
  description?: string
  text?: string
}

const ProfileCard = memo(({ title, description, text }: ProfileCardProps) => {
  return (
    <>
      <div className='image-box profile-card'>
        <h2 className='text-black'>{title}</h2>
        <p className='text-black'>{description}</p>
        <br />
        <p className='text-black'>{text}</p>
      </div>
    </>
  )
})

ProfileCard.displayName = 'ProfileCard'
export default ProfileCard
