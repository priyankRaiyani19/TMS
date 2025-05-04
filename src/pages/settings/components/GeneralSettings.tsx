"use client";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CTAButton from "../../../components/common/CTAButton";
import DynamicDropdown from "../components/DynamicDropdown";
import timeFormatOptions from "../../../data/settings/timeFormatOptions";
import languageOptions from "../../../data/settings/languages";

// Validation Schema
const generalSchema = z.object({
  language: z.string().nonempty("Language is required"),
  timezone: z.string().nonempty("Timezone is required"),
  timeFormat: z.enum(["24 Hours", "12 Hours"]),
});

export type GeneralFormData = z.infer<typeof generalSchema>;

interface GeneralSettingsProps {
  onSubmit: (data: GeneralFormData) => void;
  defaultValues?: Partial<GeneralFormData>;
}

const GeneralSettings = ({
                           onSubmit,
                           defaultValues = {
                             language: "English (Default)",
                             timezone: "English (Default)",
                             timeFormat: "24 Hours",
                           }
                         }: GeneralSettingsProps) => {
  // General Form
  const { control, handleSubmit } = useForm<GeneralFormData>({
    resolver: zodResolver(generalSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mt-4 flex flex-col gap-[2rem]"
    >
      <DynamicDropdown title={"Language"} options={languageOptions} />
      <DynamicDropdown
        title={"Timezone"}
        options={timeFormatOptions}
      />

      <div className={`p-4 flex flex-col gap-5`}>
        <label className="block text-[0.875rem] font-semibold mb-1">
          Time Format
        </label>
        <Controller
          name="timeFormat"
          control={control}
          render={({ field }) => (
            <div className="flex gap-[2rem]">
              {["24 Hours", "12 Hours"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => field.onChange(option)}
                  className={`flex items-center justify-between px-4 py-2 border rounded-lg text-[0.75rem] font-medium text-secondary-500 w-full lg:w-[11.5rem] transition-colors ${
                    field.value === option
                      ? "border-blue-500"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {option}
                  <div
                    className={`w-5 h-5 flex items-center font-medium text-secondary-500 justify-center border-2 rounded-full ${
                      field.value === option
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {field.value === option && (
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        />
      </div>

      <button type={"submit"} className={`lg:w-[14rem] w-full p-4`}>
        <CTAButton text="Save Changes" />
      </button>
    </form>
  );
};

export default GeneralSettings;