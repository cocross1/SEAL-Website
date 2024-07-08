'use client'

interface EventCardProps {
  link: string,
  date: string,
  description: string,
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  link,
  date,
  description,
  disabled,
  actionLabel = "Register",
  actionId = ""
}) => {
  return (
    <div
      className="px-8 py-6 flex justify-between items-center text-white gap-20 w-full overflow-hidden mt-10 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 bg-blue-900"
    >
      <div className="flex-1 flex flex-col">
        <div className="text-2xl">{date}</div>
        <div className="text-base mt-2">{description}</div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded-xl"
      >
        {actionLabel}
      </a>
    </div>
  );
};

export default EventCard;
