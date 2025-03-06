export default function LessonSchedule() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const timeSlots = ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30"];

  return (
    <div className="flex justify-center max-h-[500px]">
      <table className="w-[600px] border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-red-300 p-2">Time</th>
            {days.map((day) => (
              <th key={day} className="border border-red-300 p-2">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, index) => (
            <tr key={index} className="text-center">
              <td className="border border-red-300 p-2 bg-blue-200">{slot}</td>
              {days.map((day) => (
                <td key={day + index} className="border border-red-300 p-2 bg-gray-50">-</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}