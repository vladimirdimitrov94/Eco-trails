import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Paginator({ pageIndex, setPageIndex, pageSize, totalCount }) {

	const totalPages = Math.ceil(totalCount / pageSize);

	const handlePrev = () => {
		if (pageIndex > 0) setPageIndex(pageIndex - 1);
	};

	const handleNext = () => {
		if (pageIndex < totalPages - 1) setPageIndex(pageIndex + 1);
	};

	const start = pageIndex * pageSize + 1;
	const end = Math.min((pageIndex + 1) * pageSize, totalCount);


	return (
		<div className="flex items-center fixed bottom-15 right-100 justify-between bg-white px-4 py-3 sm:px-0">
			<div className="flex justify-between items-center mt-4">
				<p className="text-sm text-gray-700 fixed left-104">
					Показва <span className="font-medium">{start}</span> до <span className="font-medium">{end}</span> от <span className="font-medium">{totalCount}</span> резултата
				</p>
				<div className="flex gap-2">
					<button onClick={handlePrev} disabled={pageIndex === 0}>
						<ChevronLeftIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
					</button>
					<button onClick={handleNext} disabled={pageIndex >= totalPages - 1}>
						<ChevronRightIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
					</button>
				</div>
			</div>
		</div>
	)
}
