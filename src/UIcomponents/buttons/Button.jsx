import style from './Button.module.scss'

export default function Button({ id, text, size, onClick, onDisabled }) {
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
