import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { useSettings } from "../../hooks/useSettings";

interface TextFormattingProps {
  descriptionMode?: "inline" | "tooltip";
  grouped?: boolean;
}

export const TextFormatting: React.FC<TextFormattingProps> = React.memo(
  ({ descriptionMode = "tooltip", grouped = false }) => {
    const { t } = useTranslation();
    const { getSetting, updateSetting, isUpdating } = useSettings();

    return (
      <>
        <ToggleSwitch
          checked={getSetting("punctuation_and_capitalization") ?? true}
          onChange={(enabled) =>
            updateSetting("punctuation_and_capitalization", enabled)
          }
          isUpdating={isUpdating("punctuation_and_capitalization")}
          label={t("settings.advanced.punctuationAndCapitalization.label")}
          description={t(
            "settings.advanced.punctuationAndCapitalization.description",
          )}
          descriptionMode={descriptionMode}
          grouped={grouped}
        />
        <ToggleSwitch
          checked={getSetting("inverse_text_normalization") ?? true}
          onChange={(enabled) =>
            updateSetting("inverse_text_normalization", enabled)
          }
          isUpdating={isUpdating("inverse_text_normalization")}
          label={t("settings.advanced.inverseTextNormalization.label")}
          description={t(
            "settings.advanced.inverseTextNormalization.description",
          )}
          descriptionMode={descriptionMode}
          grouped={grouped}
        />
      </>
    );
  },
);
