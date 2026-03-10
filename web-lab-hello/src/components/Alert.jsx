export default function Alert({
  children,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  className = '',
}) {
  const variants = {
    info: 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
    success:
      'bg-green-50 border-green-500 text-green-800 dark:bg-green-950 dark:text-green-200',
    warning:
      'bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-950 dark:text-amber-200',
    error: 'bg-red-50 border-red-500 text-red-800 dark:bg-red-950 dark:text-red-200',
  }

  return (
    <div
      role="alert"
      className={`border-l-4 rounded-r-lg p-4 ${variants[variant] ?? variants.info} ${className}`}
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          {title && <p className="font-semibold mb-1">{title}</p>}
          <p className="text-sm">{children}</p>
        </div>
        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            className="opacity-60 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
            aria-label="Kapat"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}

