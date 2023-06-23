import StylesLoader from './Styles.module.css'

export default function Loading() {
	return (
		<div className={StylesLoader.wrapper}>
			<div className={StylesLoader.ball}></div>
		</div>
	)
}
