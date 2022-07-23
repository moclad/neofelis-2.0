import { useId } from 'react';

import { chakra, HTMLChakraProps, ThemingProps, useTheme } from '@chakra-ui/react';

export const IllustrationDefault = ({
  colorScheme = 'gray',
  ...rest
}: HTMLChakraProps<'svg'> & { colorScheme?: ThemingProps['colorScheme'] }) => {
  const clipPathId01 = useId();
  const theme = useTheme();
  return (
    <chakra.svg
      width={300}
      maxW="full"
      viewBox="0 0 200 200"
      fill="none"
      {...rest}
    >
      <g clipPath={`url(#${clipPathId01})`}>
        <path
          d="M137.841 191.869c-21.75 4.068-45.525-3.584-62.904-16.159-13.497-9.763-22.266-23.68-27.355-39.866-4.832-15.368-6.527-31.22-18.356-42.62-9.293-8.958-19.554-18.626-16.66-33.863 1.445-7.612 4.7-18.754 9.726-24.86C38.243 15.083 59.456 10.91 82.3 16.38c19.571 4.7 39.256 16.155 49.467 33.258a65.862 65.862 0 0 1 5.012 10.252c3.594 9.374 2.997 27.083 9.777 34.745 7.978 9.04 23.956 7.684 33.394 14.513 9.754 7.07 14.156 26.361 9.275 41.006-8.38 25.09-25.172 36.829-51.384 41.715Z"
          fill="currentColor"
          opacity={0.05}
        />
        <path
          d="M190.852 74.905c-6.292-24.15-23.82-45.977-46.624-56.54-12.954-5.999-29.38-8.702-42.786-3.91-13.198 4.723-20.747 14.427-26.166 27.074-5.962 13.917-11.174 26.614-24.336 35.04-14.717 9.415-30.66 12.655-38.47 30.283-5.64 12.774-4.945 28.377 1.84 41.06 4.222 7.887 11.024 14.826 19.517 17.416 7.829 2.391 16.177.904 23.812-1.542 10.956-3.494 23.34-10.292 35.405-7.376 20.055 4.85 36.557 18.08 67.194 2.992 23.703-11.684 35.577-35.292 34.153-61.165a119.088 119.088 0 0 0-3.539-23.332Z"
          fill={theme.colors[colorScheme]['900']}
        />
        <path
          d="M22.256 116.647a1.934 1.934 0 0 0-1.76 1.243 1.94 1.94 0 1 0 1.76-1.243ZM129.113 47.243a1.938 1.938 0 1 0 .1 3.875 1.938 1.938 0 0 0-.1-3.875ZM136.327 142.248a1.942 1.942 0 0 0-1.846 2.363 1.941 1.941 0 0 0 2.679 1.348 1.944 1.944 0 0 0 .551-3.178 1.927 1.927 0 0 0-1.384-.533ZM182.21 102.97a1.936 1.936 0 0 0-1.846 2.363 1.94 1.94 0 0 0 1.56 1.486 1.94 1.94 0 1 0 .286-3.849ZM105.252 149.593a1.938 1.938 0 1 0 1.98 1.89 1.948 1.948 0 0 0-.598-1.355 1.935 1.935 0 0 0-1.382-.535ZM163.343 146a1.933 1.933 0 0 0-1.759 1.243 1.94 1.94 0 0 0 .474 2.101 1.938 1.938 0 0 0 3.274-1.455 1.944 1.944 0 0 0-.602-1.358 1.93 1.93 0 0 0-1.387-.531ZM97.821 23.612a1.94 1.94 0 1 0 .102 3.879 1.94 1.94 0 0 0-.102-3.879ZM97.166 95.932c-2.115-1.528-4.403.877-2.77 2.91 2.114 1.506 4.402-.894 2.77-2.91ZM34.478 102.445a.967.967 0 1 0 0-1.934.967.967 0 0 0 0 1.934ZM77.924 104.52a1.005 1.005 0 1 0-1.384 1.457 1.005 1.005 0 0 0 1.384-1.457ZM86.517 67.04c-2.115-1.528-4.398.877-2.77 2.911 2.114 1.528 4.401-.877 2.77-2.91ZM67.275 75.664a1.004 1.004 0 1 0-1.383 1.456 1.004 1.004 0 0 0 1.383-1.456ZM116.498 122.374a.972.972 0 1 0 .048 1.944.972.972 0 0 0-.048-1.944ZM128.227 93.315a.972.972 0 1 0 .038 1.943.972.972 0 0 0-.038-1.943ZM88.89 54.23a.972.972 0 1 0 .037 1.944.972.972 0 0 0-.037-1.944ZM111.341 73.386a.974.974 0 0 0-.884.622.968.968 0 0 0 .237 1.054.972.972 0 1 0 .647-1.676ZM32.611 130.284a.974.974 0 0 0-.646 1.676c.14.133.315.221.505.253a.968.968 0 0 0 1.136-.984.969.969 0 0 0-.995-.945ZM35.364 149.932a.977.977 0 0 0-.887.619.973.973 0 0 0 1.3 1.241.97.97 0 0 0 .495-1.283.968.968 0 0 0-.908-.577ZM143.546 133.665a.972.972 0 1 0-1.944.048.972.972 0 0 0 1.944-.048ZM143.695 152.73a.969.969 0 0 0-.639 1.669.968.968 0 1 0 .639-1.669ZM178.196 123.753a.971.971 0 1 0 .044 1.942.971.971 0 0 0-.044-1.942ZM139.225 52.007a.967.967 0 1 0 0-1.935.967.967 0 0 0 0 1.935ZM120.134 108.875a3.128 3.128 0 1 0-6.245-.35 3.128 3.128 0 0 0 6.245.35ZM142.779 39.173a2.514 2.514 0 1 0-.126-5.026 2.514 2.514 0 0 0 .126 5.026ZM18.893 139.907c-.221 2.021-.452 2.26-2.445 2.572 2.02.226 2.26.452 2.572 2.45.226-2.025.452-2.26 2.45-2.577-2.02-.221-2.251-.438-2.577-2.445ZM157.047 149.72c-.181 1.645-.357 1.831-1.989 2.093 1.641.181 1.808.357 2.088 1.989.186-1.641.362-1.808 1.994-2.089-1.646-.185-1.831-.348-2.093-1.993ZM110.893 104.281c-.181 1.64-.357 1.808-1.989 2.092 1.641.181 1.808.357 2.093 1.989.181-1.645.357-1.831 1.989-2.093-1.645-.18-1.831-.357-2.093-1.988ZM186.264 98.612c-.185 1.641-.361 1.808-1.993 2.093 1.645.181 1.83.357 2.093 1.989.18-1.645.357-1.831 1.988-2.093-1.64-.181-1.826-.357-2.088-1.989ZM39.592 101.293a2.043 2.043 0 1 0-.101-4.084 2.043 2.043 0 0 0 .101 4.084ZM84.23 35.753c-.186 1.645-.362 1.808-1.994 2.093 1.646.18 1.831.357 2.093 1.988.181-1.64.357-1.808 1.989-2.093-1.64-.18-1.826-.356-2.088-1.988Z"
          fill={theme.colors.white}
        />
        <path
          d="M79.85 143.668a6.288 6.288 0 1 0 0-12.575 6.288 6.288 0 0 0 0 12.575Z"
          fill={theme.colors.white}
          stroke={theme.colors.white}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M78.25 132.766a4.756 4.756 0 0 0-1.46-.877 6.177 6.177 0 0 1 1.604-.629c.593.377 1.158.796 1.69 1.252 2.302 1.989 1.682 1.808 4.973 2.947.304.104.597.236.877.394.11.444.174.898.19 1.356a6.29 6.29 0 0 1-.39 2.323c-1.179-.325-2.743-.863-3.48-1.564-1.238-1.18-1.496-3.015-4.004-5.202ZM84.523 141.584a6.22 6.22 0 0 1-1.613 1.293c-1.189-.787-1.754-1.641-3.444-2.36-1.478-.628-3.901-.714-5.424-.696a6.262 6.262 0 0 1-.493-2.26v-.321c1.785.094 3.545.452 5.225 1.063 2.423.863 3.62 2.517 5.75 3.281ZM78.11 135.224c-1.099.583-2.816.335-4.159 0a6.228 6.228 0 0 1 1.013-1.785c1.776.276 4.664.976 3.146 1.785Z"
          fill={theme.colors[colorScheme]['300']}
        />
        <path
          d="M82.657 131.64c7.232.357 13.23 2.35 13.289 4.746.067 2.811-7.232 5.27-16.34 5.496-9.108.226-16.525-1.866-16.593-4.673-.063-2.541 5.908-4.796 13.772-5.37"
          stroke={theme.colors.white}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M83.633 131.898c4.457.52 7.648 2.025 7.684 3.878.059 2.409-5.202 4.493-11.752 4.655-6.55.163-11.915-1.658-11.973-4.068-.055-2.011 3.616-3.796 8.633-4.425"
          stroke={theme.colors.white}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M95.81 138.42a1.078 1.078 0 0 0-1.317-1.026 1.079 1.079 0 0 0 .264 2.133 1.065 1.065 0 0 0 .757-.334 1.072 1.072 0 0 0 .296-.773ZM68.853 136.16a1.082 1.082 0 0 0-2.145-.154 1.081 1.081 0 1 0 2.145.154Z"
          fill={theme.colors[colorScheme]['300']}
        />
        <path
          d="M146.848 148.22c.424-5.348-3.567-10.027-8.914-10.452-5.348-.424-10.028 3.567-10.452 8.914-.425 5.348 3.566 10.028 8.914 10.452 5.348.425 10.027-3.566 10.452-8.914Z"
          fill={theme.colors.white}
          stroke={theme.colors.white}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m141.928 142.117 4.872 6.491a9.629 9.629 0 0 0-.312-3.842l-4.56-2.649ZM131.97 139.256l11.585 15.508a9.636 9.636 0 0 0 2.215-2.834l-9.741-14.116a9.753 9.753 0 0 0-4.059 1.442ZM137.064 157.151l-5.035-6.834 2.712 6.527a9.435 9.435 0 0 0 2.323.307ZM140.978 156.373l-11.49-14.87c-.103.135-.198.28-.298.425l8.403 15.227a9.755 9.755 0 0 0 3.385-.782Z"
          fill={theme.colors[colorScheme]['300']}
        />
        <path
          d="M176.728 96.282c6.668-12.27 2.126-27.621-10.144-34.289-12.269-6.667-27.621-2.126-34.289 10.144-6.667 12.27-2.126 27.622 10.144 34.289 12.27 6.668 27.622 2.126 34.289-10.144Z"
          fill={theme.colors.white}
        />
        <path
          d="m177.446 73.567-31.862-3.905 26.994-3.142a23.96 23.96 0 0 0-1.144-1.098l-35.071 1.18a25.031 25.031 0 0 0-3.616 4.732l8.683 1.117-10.106 1.654 12.448 2.35-14.302 4.276c-.049.362-.09.719-.126 1.08l34.352-1.51-22.333 5.249 12.018 1.496-11.06 3.137 37.068-1.483a25.12 25.12 0 0 0-.253-10.238l-9.7-1.464 9.122-.588a26.072 26.072 0 0 0-1.112-2.843ZM177.893 93.821l-30.18.755 16.06 1.844-26.894 5.912a25.264 25.264 0 0 0 34.871.371l-10.323 1.609 13.216-4.8a25.03 25.03 0 0 0 3.25-5.69ZM142.407 62.032l16.995-.357-5.225-1.392 4.416-1.008a25.186 25.186 0 0 0-16.186 2.757ZM141.381 94.576l-10.193-.633a25.478 25.478 0 0 0 4.136 6.721l6.057-6.088Z"
          fill={theme.colors[colorScheme]['300']}
        />
        <path
          d="M176.728 96.282c6.668-12.27 2.126-27.621-10.144-34.289-12.269-6.667-27.621-2.126-34.289 10.144-6.667 12.27-2.126 27.622 10.144 34.289 12.27 6.668 27.622 2.126 34.289-10.144Z"
          stroke={theme.colors[colorScheme]['900']}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M165.432 44.522c-4.281-1.144-9.89 4.79-14.889 14.712.898-.139 1.803-.231 2.712-.276 3.72-7.426 7.521-11.779 10.278-11.047 4.895 1.307 4.665 18.14-.524 37.593-5.189 19.454-13.357 34.176-18.252 32.87-2.522-.674-3.679-5.474-3.503-12.629a25.345 25.345 0 0 1-2.233-1.546c-.257 9.976 1.677 16.986 5.677 18.053 6.78 1.808 16.91-14.13 22.632-35.595 5.722-21.465 4.882-40.332-1.898-42.135Z"
          fill={theme.colors[colorScheme]['300']}
          stroke={theme.colors[colorScheme]['900']}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M118.921 42.772c6.935 0 12.556-5.621 12.556-12.556 0-6.935-5.621-12.557-12.556-12.557-6.935 0-12.557 5.622-12.557 12.557 0 6.934 5.622 12.556 12.557 12.556Z"
          fill={theme.colors.white}
        />
        <path
          d="M115.517 18.134c4.068 3.164 11.567 11.11 6.916 24.141a12.556 12.556 0 0 0-6.916-24.141Z"
          fill={theme.colors[colorScheme]['300']}
        />
        <path
          d="M118.921 42.772c6.935 0 12.556-5.621 12.556-12.556 0-6.935-5.621-12.557-12.556-12.557-6.935 0-12.557 5.622-12.557 12.557 0 6.934 5.622 12.556 12.557 12.556Z"
          stroke={theme.colors[colorScheme]['900']}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M91.335 79.909c-2.26-.805-4.687-1.04-6.753.262-1.749 1.103-2.567 3.566-4.76 3.882-2.607.376-2.983-.162-4.596.959a3.122 3.122 0 0 0-1.356 2.856s1.74-2.319 4.018-1.907c.29.017.567.134.782.33-1.695.538-3.643.38-4.8 1.577a21.568 21.568 0 0 0-2.934 4.272c-.7 1.283-2.26.623-4.135 2.074-1.876 1.451-2.816 2.034-3.436 3.901-.619 1.867-1.356 2.857-3.014 3.688a16.722 16.722 0 0 1-3.232 1.207s2.653.95 4.307.118c1.655-.832 2.26-1.659 3.639-3.485 1.379-1.826 6.13-1.623 6.13-1.623s-3.106 1.04-4.72 3.196c-1.613 2.156-1.808 3.81-4.547 4.353-2.319.452-3.919-.027-5.112.822a5.527 5.527 0 0 0-2.97 1.971c-1.74 2.296-2.124 2.712-4.601 3.214-2.477.501-4.769 2.906-6.039 5.347-1.27 2.441-1.401 3.688-4.642 5.004-3.24 1.315-4.945 1.807-6.613 3.878a24.217 24.217 0 0 0-2.26 3.164s3.738-3.743 8.39-4.62c4.65-.877 8.389-4.615 9.116-6.97.728-2.355 3.987-1.329 7.151-3.186.446-.269.87-.571 1.27-.904.205-.132.388-.295.542-.484 1.225-1.162 1.953-2.359 2.916-3.105a6.472 6.472 0 0 1 2.056-.326c4.72-.09 8.2-.592 9.605-3.164 1.406-2.571 2.396-3.896 4.674-3.484 2.278.411 3.973-.127 4.846-.254.872-.126 1.405-.501-.62 1.863s-4.52 1.541-5.256 2.535l-1.985 2.654s1.736-2.324 4.303-1.953c2.568.371 6.464-.339 7.454-1.668.99-1.329 2.938-3.232 4.344-3.733 1.405-.502 4.1-1.329 4.723-2.166a9.292 9.292 0 0 1 1.211-1.455c.05 2.079-1.414 4.294-2.978 5.6a13.623 13.623 0 0 0 6.843-6.504c3.336-6.83.285-15.151-6.96-17.736Z"
          fill={theme.colors.white}
        />
        <path
          d="M92.316 82.232s-3.065-1.239-5.487-.836c-2.423.402-3.25 2.151-4.769 4.267-1.519 2.115-3.164 2.323-5.008 3.186a5.704 5.704 0 0 0-2.848 2.712c-.122.393.425-.452 1.542-.813a9.38 9.38 0 0 1 2.816-.276 5.85 5.85 0 0 1-3.11 2.626c-2.26.872-3.838 1.257-4.606 1.88a5.375 5.375 0 0 0-1.22 1.632c-.254.353 1.098-1.239 2.933-.674 1.835.565 4.52.254 4.52.254s-3.503.637-4.904 1.925c-1.401 1.288-1.935 2.992-2.554 4.52-.62 1.528-1.966 1.257-2.988 2.233a8.313 8.313 0 0 0-1.64 2.509 13.8 13.8 0 0 1 4.203-2.432c2.41-.832 2.048-1.519 3.567-3.616 1.518-2.097 3.855-2.26 5.69-1.686 1.835.574 5.157-.411 5.157-.411s-.578 1.401-1.487 1.55c-.908.149.28.949 1.614.353 1.334-.597 1.7-1.772 3.142-1.325 1.441.448 1.622.791 2.951.199 1.329-.592 3.377-2.545 5.144-3.164 1.767-.62 3.399-5.424 2.26-8.769-1.14-3.345-4.918-5.844-4.918-5.844Z"
          fill={theme.colors[colorScheme]['300']}
        />
        <path
          d="m92.036 83.62-2.531-.75a4.068 4.068 0 0 0-2.884.22l-2.748 1.316a5.482 5.482 0 0 0-2.934 3.548l-1.026 3.91s1.704 4.637 3.404 5.65c1.7 1.012 6.671.592 8.823.131 2.151-.461 4.18-2.82 4.344-4.769.162-1.948.696-4.389-.593-6.124-1.288-1.736-3.855-3.132-3.855-3.132Z"
          fill={theme.colors[colorScheme]['900']}
        />
        <path
          d="M92.384 88.158a1.437 1.437 0 1 1-2.302-1.722 1.437 1.437 0 0 1 2.302 1.722v0ZM86.892 87.565a1.125 1.125 0 1 1-1.804-1.345 1.125 1.125 0 0 1 1.804 1.345v0ZM89.79 92.465a1.063 1.063 0 1 1-1.704-1.27 1.063 1.063 0 0 1 1.703 1.27v0ZM94.526 89.68a.502.502 0 1 1-.807-.595.502.502 0 0 1 .807.596v0ZM85.911 92.221a.814.814 0 1 1-1.302-.977.814.814 0 0 1 1.302.977v0ZM88.74 85.536a.625.625 0 1 1-1-.752.625.625 0 0 1 1 .752v0Z"
          fill={theme.colors.white}
          stroke={theme.colors[colorScheme]['900']}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id={clipPathId01}>
          <path fill={theme.colors.white} d="M0 0h200v200H0z" />
        </clipPath>
      </defs>
    </chakra.svg>
  );
};
