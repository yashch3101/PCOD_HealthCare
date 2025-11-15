export function ProgressCircle({ progress }) {
    return (
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-purple-600">{progress}%</span>
        </div>
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="8"
            strokeDasharray={`${(2 * Math.PI * 40 * progress) / 100} ${(2 * Math.PI * 40 * (100 - progress)) / 100}`}
            strokeDashoffset={2 * Math.PI * 40 * 0.25}
            strokeLinecap="round"
          />
        </svg>
      </div>
    )
  }
  