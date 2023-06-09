
export default function Issue() {
    return (
        <>
        <div className="widgetActive bg-gray-900 cursor-pointer rounded-lg w-2/5 hover:bg-gray-800 px-8 py-4 hover:bg-gradient-to-br from-[#6a38cf] to-pink-500 shadowOnHover">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mt-2 mb-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <span className="font-bold mt-4">Issue</span>
        </div>
        </>
    )
}