import style from './UserTweetsContent.module.scss'
import { ReactComponent as Like } from '../../assets/redlike.svg'
import { ReactComponent as Message } from '../../assets/message.svg'
import { ReactComponent as Dislike } from '../../assets/unlike.svg'
import { useState } from 'react'
import likeAPI from 'api/likeAPI'

export default function UserTweetsContent({
	id,
	name,
	account,
	avatar,
	description,
	likeCount,
	relativeTime,
	repliesCount,
	isSelfUserLike,
}) {
	const [like, setLike] = useState(isSelfUserLike)
	const [likeQuantity, setLikeQuantity] = useState(likeCount)

	const handleLikeClick = (id) => {
		setLike(!like)
		if (!like) {
			likeAPI.like(id).then((response) => {
				console.log(response)
			})
			setLikeQuantity(likeQuantity - 1)
		} else {
			likeAPI.unlike(id).then((response) => {
				console.log(response)
			})
			setLikeQuantity(likeQuantity + 1)
		}
	}

	return (
		<div className={`${style.mainTweetsContainer}`}>
			<div className={`${style.mainTweetsList}`}>
				<div className={`${style.mainTweetsLogo}`}>
					<img
						src={avatar}
						className={`${style.mainTweetsImg}`}
						alt=''
						width='50px'
						heigh='50px'
					/>
				</div>
				<div className={`${style.mainTweetsInfo}`}>
					<div className={`${style.mainTweetsSecInfo}`}>
						<div className={`${style.mainTweetsNameGroup}`}>
							<div className={`${style.mainTweetsName}`}>{name}</div>
							<div className={`${style.mainTweetsSmallAccount}`}>
								<div className={`${style.mainTweetsAccount}`}>{account}</div>
								<div className={`${style.mainTweetsdot}`}>・</div>
								<div className={`${style.mainTweetsTime}`}>
									<p>{relativeTime}</p>
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.mainTweetsContent}`}>{description}</div>
					<div className={`${style.mainTweetsQuantityGroup}`}>
						<div className={`${style.mainTweetsQuantity}`}>
							<Message width='16px' height='16px' />
							<p>{repliesCount}</p>
						</div>
						<div className={`${style.mainTweetsLikeQuantity}`}>
							{like ? (
								<Dislike
									width='16px'
									height='16px'
									id={id}
									onClick={() => handleLikeClick(id)}
								/>
							) : (
								<Like
									width='16px'
									height='16px'
									id={id}
									onClick={() => handleLikeClick(id)}
								/>
							)}
							<p>{likeQuantity}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
