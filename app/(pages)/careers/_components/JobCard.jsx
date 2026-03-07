import Link from 'next/link';

export default function JobCard({ job, isOpenApp = false }) {
    if (!job) return null;

    return (
        <div className="relative group overflow-hidden rounded-2xl mb-6 shadow-[0_10px_25px_rgba(0,0,0,0.02)]">
            {/* 1. THE BORDER LAYER */}
            {isOpenApp ? (
                <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary pointer-events-none" />
            ) : (
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-b from-primary to-white p-0.5">
                    <div className="h-full w-full rounded-[14px] bg-white" />
                </div>
            )}

            {/* 2. THE CONTENT LAYER */}
            <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white/50">
                <div className="max-w-3xl">
                    <h3 className="text-2xl font-bold text-black mb-1">{job.title}</h3>
                    <p className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-4">
                        {job.type} • {job.location}
                    </p>
                    <p className="text-gray-600 leading-relaxed">{job.shortDesc}</p>
                </div>

                <Link 
                    href={isOpenApp ? `/contact` : `/careers/${job.id}`}
                    className="bg-black text-white px-8 py-3 rounded font-mono text-sm hover:bg-gray-800 transition-all shrink-0"
                >
                    {isOpenApp ? "Apply now" : "View role"}
                </Link>
            </div>
        </div>
    );
}