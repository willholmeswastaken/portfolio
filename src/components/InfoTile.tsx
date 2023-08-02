interface InfoTileProps {
  url: string;
  title: string;
  icon: any;
  statistic?: number;
  description?: string;
}

const InfoTile = ({
  url,
  title,
  icon,
  statistic,
  description,
}: InfoTileProps) => (
  <a className="transform hover:scale-[1.01] transition-all rounded-xl w-full bg-gradient-to-r p-1 from-[#3e81ce] to-[#1b29a3]" href={url}>
    <div className="flex flex-col justify-between h-full bg-black bg-opacity-95 rounded-lg p-4">
      <div className="flex flex-col md:flex-row justify-between">
        <h4 className="font-medium mb-6 sm:mb-10 w-full text-gray-100 tracking-tight text-[0.95rem]">{title}</h4>
      </div>
      {description && <p className="italic text-sm text-gray-500 mt-[-1rem] sm:mt-[-2rem] mb-4">{description}</p>}
      <div className="flex items-center text-gray-200 capsize">
        {icon}
        {statistic !== undefined && statistic >= 0 && <span className="ml-2 align-baseline capsize">{statistic}</span>}
      </div>
    </div>
  </a>
);

export default InfoTile;
