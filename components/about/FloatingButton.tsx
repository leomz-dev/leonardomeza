export default function FloatingButton() {
    return (
        <div className="fixed bottom-8 left-8 z-40">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black shadow-lg hover:scale-110 transition-transform">
                <span className="font-bold font-serif italic text-lg">N</span>
            </button>
        </div>
    );
}
