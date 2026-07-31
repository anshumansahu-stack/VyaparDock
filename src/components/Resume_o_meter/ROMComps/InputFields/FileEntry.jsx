import React from 'react'

const FileEntry = (props) => {
    return (
        <div className={`flex justify-center items-center border-solid border font-[Braah_One] w-full rounded-xl p-2 text-white bg-white/20 ${props.className || ""}`}>
            <label htmlFor="resume-upload" className="flex items-center justify-center cursor-pointer px-4 py-2 min-h-15 min-w-60 rounded-md bg-blue-700 text-white text-[20px] hover:bg-blue-500">
                Upload Resume +
            </label>
            <input
                id="resume-upload"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => setResume(e.target.files[0])}
            />
        </div>
    )
}

export default FileEntry