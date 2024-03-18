export default function CardSkeleton() {
	return (
		<div className='w-[108px] h-[108px] relative py-1 px-2 flex flex-col items-center  rounded-lg shadow-drop-2-dp cursor-pointer'>
			<div className='absolute bottom-0 h-11 rounded-[7px] left-0 right-0 bg-grayscale-background'></div>
		</div>
	)
}
