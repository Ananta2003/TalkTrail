
interface buttonText {
    text: string,
    onClick?: () => void;
}

export default function Button(props: buttonText) {
    return (
        <div>
            <button onClick={props.onClick} className="bg-[#010101] border-y-[0.1px]  px-8 py-2 rounded-full text-white flex items-center justify-center border-gray-700  border-x-4 font-custom cursor-pointer hover:border-y-2" type="button">
                {props.text}
            </button>
        </div>
    )
}