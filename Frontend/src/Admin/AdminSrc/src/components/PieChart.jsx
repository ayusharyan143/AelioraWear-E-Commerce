import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
  const theme = useTheme();
  const colors = {
    light: {
      grey: {
        100: '#e0e0e0',
        200: '#b0b0b0',
      },
      primary: '#1976d2',
      secondary: '#f44336',
    },
    dark: {
      grey: {
        100: '#424242',
        200: '#616161',
      },
      primary: '#90caf9',
      secondary: '#f48fb1',
    },
  }[theme.palette.mode]; // Adjust based on the current theme

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={4} // Slightly rounded corners for a softer look
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={true} // Enabled to show labels
      arcLabelsRadiusOffset={0.55} // Adjusted for better label visibility
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: true, // Center align legend items
          translateX: 0,
          translateY: 56,
          itemsSpacing: 10, // Increased spacing for better readability
          itemWidth: 120, // Increased item width for longer text
          itemHeight: 20,
          itemTextColor: colors.grey[100], // Matches the theme
          itemDirection: "left-to-right",
          itemOpacity: 0.85, // Slightly less opaque for a subtle look
          symbolSize: 20,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: colors.primary, // Highlight color on hover
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
