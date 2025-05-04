
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CTAButton from "../../../components/common/CTAButton";
import Switch from "react-switch";



const notificationSchema = z.object({
  message: z.boolean(),
  taskUpdate: z.boolean(),
  taskDeadline: z.boolean(),
  mentorHelp: z.boolean(),
});

export type NotificationFormData = z.infer<typeof notificationSchema>;

interface NotificationSettingsProps {
  onSubmit: (data: NotificationFormData) => void;
  defaultValues?: Partial<NotificationFormData>;
}

export const NotificationSettings = ({
                                       onSubmit,
                                       defaultValues = {
                                         message: true,
                                         taskUpdate: false,
                                         taskDeadline: true,
                                         mentorHelp: false,
                                       }
                                     }: NotificationSettingsProps) => {
  // Notification Form
  const { control, handleSubmit } = useForm<NotificationFormData>({
    resolver: zodResolver(notificationSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mt-4 h-full flex flex-col "
    >
      {[
        { name: "message", label: "Message" },
        { name: "taskUpdate", label: "Task Update" },
        { name: "taskDeadline", label: "Task Deadline" },
        { name: "mentorHelp", label: "Mentor Help" },
      ].map((field) => (
        <div
          key={field.name}
          className="flex items-center gap-3 text-sm p-3 rounded-lg h-full"
        >
          <Controller
            name={field.name as keyof NotificationFormData}
            control={control}
            render={({ field: { value, onChange } }) => (
              <Switch
                onChange={onChange}
                checked={value}
                onColor="#2563EB"
                offColor="#d1d5db"
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={40}
                handleDiameter={18}
              />
            )}
          />
          <span className="text-secondary-500 font-semibold">
            {field.label}
          </span>
        </div>
      ))}
      <button type={"submit"} className={`lg:w-[14rem] w-full`}>
        <CTAButton text="Save Changes" />
      </button>
    </form>
  );
};

