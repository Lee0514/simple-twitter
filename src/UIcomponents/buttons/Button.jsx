import style from './Button.module.scss'

export default function Button({ text, size, onClick, onDisabled, id }) {
	return (
		<>
			<button
				className={`${style.button} ${style[size]}`}
				onClick={() => onClick(id)}
				disabled={onDisabled}
			>
				{text}
			</button>
		</>
	)
}
