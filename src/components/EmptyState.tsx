import { Card } from "flowbite-react";
import { InboxIcon } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Data",
  message = "There’s nothing here yet. Check back later!",
  icon = <InboxIcon className="h-12 w-12 text-gray-400" />,
}) => {
  return (
    <Card className="flex flex-col items-center justify-center text-center p-6 rounded-2xl shadow-md h-[280px] w-full max-w-sm mx-auto">
      <div className="flex flex-col items-center justify-center flex-1">
        {icon}
        <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{message}</p>
      </div>
    </Card>
  );
};

export default EmptyState;
