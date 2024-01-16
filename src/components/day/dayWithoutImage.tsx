interface DayWithoutImageProps {
    children: React.ReactNode
}

export default function DayWithoutImage({ children }: DayWithoutImageProps): JSX.Element {
    return (
        <div
            className="max-w-20 h-20"
        >
            <div
                className="w-full h-full sm:rounded bg-black/20"
            ></div>
            <div className="relative bottom-3 flex justify-center">
                <span className="w-5.5 h-5.5 rounded-full bg-black text-white text-sm flex items-center justify-center">
                    {children}
                </span>
            </div>
        </div>
    );
}