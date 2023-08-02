interface InfoTileProps {
  url: string;
  title: string;
  icon: any;
  statistic?: number;
  description?: string;
  views?: number;
}

const InfoTile = ({
  url,
  title,
  icon,
  statistic,
  description,
  views
}: InfoTileProps) => (
  <a className="transform hover:scale-[1.01] transition-all rounded-xl w-full bg-gradient-to-r p-1 from-[#3e81ce] to-[#1b29a3]" href={url}>
    <div className="flex flex-col justify-between h-full bg-black bg-opacity-95 rounded-lg p-4">
      <div className="flex flex-col md:flex-row justify-between">
        <h4 className="font-medium mb-6 sm:mb-10 w-full text-gray-100 tracking-tight text-[0.95rem]">{title}</h4>
      </div>
      {description && <p className="italic text-sm text-gray-500 mt-[-1rem] sm:mt-[-2rem] mb-4">{description}</p>}
      <div className="flex items-center text-gray-200 capsize gap-x-4">
        <div className="flex">
          {icon}
          {statistic !== undefined && statistic >= 0 && <span className="ml-2 align-baseline capsize">{statistic}</span>}
        </div>
        {
          views !== undefined && (
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>

              <span className="ml-2 align-baseline capsize">{views}</span>
            </div>
          )
        }

      </div>
    </div>
  </a>
);

export default InfoTile;
