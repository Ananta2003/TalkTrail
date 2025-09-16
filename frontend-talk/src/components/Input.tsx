interface inputProps {
    label: string,
    placeholder?: string,
    /* eslint-disable @typescript-eslint/no-explicit-any */
    reference?: any,
    style?:string
}
export default function Input(props: inputProps) {

    return (
        <div className="flex justify-center w-full m-2 font-custom">
            <div className="w-full">
                <label className="block px-2">{props.label}</label>
                <input className={`p-2 bg-white rounded-md ${props.style} text-black border-1 border-black`} type="text" placeholder={props.placeholder} ref={props.reference} />
            </div>

        </div>
    )
}