import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const EyeOff = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M11.83 9 15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8 1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22 21 20.73 3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"
    />
  </Svg>
)

const Eye = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
    />
  </Svg>
)

export default function PasswordReveal ({ value, togglePassword, color }) {
  return (
    <TouchableHighlight
      activeOpacity={0.7}
      underlayColor="#transparent"
      onPress={() => togglePassword(!value)}
      className='self-start'
    >
      <View className="flex-row items-center px-2">
        {!value
          ? (
          <EyeOff
            color={color}
          />
            )
          : (
          <Eye color={color} />
            )}

        <Text className="ml-1.5 font-LibreFranklinMedium text-sm dark:text-white">
          {value ? 'Revelar' : 'Ocultar'} Contraseña
        </Text>
      </View>
    </TouchableHighlight>
  )
}
