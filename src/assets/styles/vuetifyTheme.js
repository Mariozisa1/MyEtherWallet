const baseColors = {
  // Asphalt
  asphalt5: '#1c2136',
  asphalt10: '#2E3046',
  asphalt25: '#33364B',
  asphalt50: '#393D50',
  asphalt75: '#3F4356',
  asphalt100: '#4A4E5F',
  asphalt200: '#565B6C',
  asphalt300: '#666C7B',
  asphalt400: '#7B8290',
  asphalt500: '#8F97A3',
  asphalt600: '#A3ACB8',
  asphalt700: '#BBC0CB',
  asphalt800: '#D2D6DD',
  asphalt900: '#FFFFFF'
};

export default {
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        // Backgrounds
        bgSideMenu: '#07385f',
        bgWallet: '#F2F4FA',
        bgWalletBlock: '#FFFFFF',
        bgWalletBlockDark: '#F2F4FA',
        bgOverlay: '#F2FAFA',
        bgGrey: '#F8F9FB',
        bgBlack: '#000000',
        // Box shadow
        boxShadow: '#ececec',
        // Text
        textAlwaysDark: '#1F242F',
        textDark: '#1F242F',
        textMedium: '#626978',
        textLight: '#9BA1AE',
        // Grey
        greyPrimary: '#626978',
        greyMedium: '#E4E7ED',
        greyLight: '#f2f4fa',
        // Whites
        alwaysWhite: '#FFFFFF',
        whiteBg: '#FFFFFF',
        popupBg: '#FFFFFF',
        // Blue
        bluePrimary: '#4B83E8',
        blueMedium: '#D4E1F9',
        blueLight: '#EEF3FD',
        // Green
        greenPrimary: '#05C0A5',
        greenMedium: '#C3F0E9',
        greenLight: '#EBFAF8',
        // Red
        redPrimary: '#FF445B',
        redMedium: '#FFD2D8',
        redLight: '#FFF0F2',
        // Orange
        orangePrimary: '#F5A623',
        orangeMedium: '#FBDBA7',
        orangeLight: '#FEF4E5',
        // Disabled
        disabledPrimary: '#CECECE',
        disabledMedium: '#E0E0E0',
        disabledLight: '#F6F6F6',
        // Buttons
        buttonWhite: '#FFFFFF',
        buttonGrayLight: '#F2F4FA',
        buttonGrayLightSelected: '#c8ccd3',
        buttonGrayDark: '#626978',
        buttonToggleDark: '#1F242F',
        buttonBorder: '#d1d1d1',
        // Inputs
        inputPrimary: '#FFFFFF',
        // Border
        borderInput: '#e0e0e0',
        borderTable: '#EAEAEA',
        // Table
        tableBg: '#f4f7fe',
        // =========================================================
        // =========================================================
        // new colors
        backgroundWallet: '#F2F4FA',
        backgroundOverlay: '#F2FAFA',
        backgroundGrey: '#F8F9FB',
        whiteAlways: '#FFFFFF',
        whiteBackground: '#FFFFFF',
        whitePopup: '#FFFFFF',
        //old colors
        primaryHover: '#1eb19b',
        primaryActive: '#56c5b4',
        primaryOutlineActive: '#baede6',
        secondaryOutlineActive: '#d6dffa',
        errorOutlineActive: '#ffd7dc',
        basicOutlineActive: '#c5ccd3',
        selectActive: '#dcfff9',
        selectHover: '#E5EAEE',
        superPrimary: {
          base: '#f2fafa',
          darken1: '#e3f2f2'
        },
        superPrimaryHover: '#f5fdfb',
        emerald100: '#f2fafa',
        inputBorder: '#e0e0e0',
        inputDisabled: '#cecece',
        dropdownBorder: '#05c0a5',
        progressBar: '#F3FAFA',
        txIn: '#7895f2',
        txOut: '#ffaf8f',
        swap: '#7fdefb',
        swapDisable: '#f8f8f8',
        captionPrimary: '#a9bcd2',
        textSecondary: '#999999',
        textSecondaryModule: '#999999',
        tagLabel: '#6d89a6',
        inputLabel: '#6d89a6',
        searchInput: '#f2f4fa',
        searchText: '#96a8b6',
        titlePrimary: '#0b2840',
        titleSecondary: '#4E5A6E',
        textPrimary: '#707D9E',
        textPrimaryModule: '#667f9b',
        white: '#fff',
        black: '#000',
        mewBg: '#fff',
        expandHeader: '#184f90',
        primary: '#05c0a5',
        blue500: '#6e9fc9',
        basic: '#0b1a40',
        success: '#2cc479',
        error: {
          base: '#ff445b',
          lighten1: '#ffd7dc',
          lighten2: '#e96071'
        },
        warning: {
          base: '#FFF2DC',
          darken1: '#f5a623',
          darken2: '#ff7700'
        },
        disabled: '#cecece',
        tableHeader: '#f9f9f9',
        selectHeaderBg: '#F8FAFC',
        selectBorder: '#F1F1F1',
        maxButton: '#F6F8FD',
        textBlack: '#202124',
        textBlack2: '#5F6368',
        buttonSelect: '#D7F5F4',
        blue100: '#F3F5FB',
        surface: '#192133' // name from figma. not sure if its correct
      },
      dark: {
        // Backgrounds
        bgSideMenu: '#292B42',
        bgWallet: '#1c2136',
        bgWalletBlock: '#292B42',
        bgWalletBlockDark: '#1c2136',
        bgOverlay: '#292B42',
        bgGrey: '#F8F9FB',
        bgBlack: '#000000',
        //Box shadow
        boxShadow: '#3c3c3c',
        // Text
        textAlwaysDark: '#1F242F',
        textDark: '#FFFFFF',
        textMedium: '#A5B0C7',
        textLight: '#9BA1AE',
        // Grey
        greyPrimary: '#626978',
        greyMedium: '#566075',
        greyLight: '#F9FAFE',
        // Whites
        alwaysWhite: '#FFFFFF',
        whiteBg: '#151518',
        popupBg: '#1B1C25',
        // Blue
        bluePrimary: '#6292EB',
        blueMedium: '#355288',
        blueLight: '#283A5D',
        // Green
        greenPrimary: '#06D9B9',
        greenMedium: '#0F7E79',
        greenLight: '#154853',
        // Red
        redPrimary: '#FF5E70',
        redMedium: '#8C4155',
        redLight: '#473044',
        // Orange
        orangePrimary: '#F6AF3C',
        orangeMedium: '#87693B',
        orangeLight: '#45403A',
        // Disabled
        disabledPrimary: '#606670',
        disabledMedium: '#383F4A',
        disabledLight: '#242D3E',
        // Buttons
        buttonWhite: '#1c2136',
        buttonGrayLight: baseColors.asphalt5,
        buttonGrayLightSelected: '#3e485c',
        buttonGrayDark: '#FFFFFF',
        buttonToggleDark: '#1F242F',
        buttonBorder: '#4d4f7d',
        // Inputs
        inputPrimary: '#292B42',
        // Border
        borderInput: '#667f9b',
        borderTable: baseColors.asphalt700,
        // Table
        tableBg: '#1c2136',
        // =========================================================
        // =========================================================
        // new colors
        backgroundWallet: '#000000',
        backgroundOverlay: '#000000',
        backgroundGrey: '#000000',
        whiteAlways: '#FFFFFF',
        whiteBackground: '#192439',
        whitePopup: '#202B43',
        //old colors
        primaryHover: '#1eb19b',
        primaryActive: '#56c5b4',
        primaryOutlineHover: '#03292c',
        primaryOutlineActive: '#15796a',
        secondaryOutlineHover: '#182040',
        secondaryOutlineActive: '#2e3c75',
        errorOutlineHover: '#361317',
        errorOutlineActive: '#651f28',
        basicOutlineHover: '#1e2a3e',
        basicOutlineActive: '#3d4e6b',
        selectActive: '#2e3c75',
        selectHover: '#2c3448',
        superPrimary: {
          base: '#242c48',
          darken1: '#e3f2f2'
        },
        superPrimaryHover: '#f5fdfb',
        emerald100: '#151a29',
        inputBorder: '#667f9b',
        inputDisabled: '#3A465D',
        dropdownBorder: '#7e90a7',
        progressBar: '#151A29',
        txIn: '#7895f2',
        txOut: '#ffaf8f',
        swap: '#0f1320',
        swapDisable: '#0f1320',
        captionPrimary: '#a9bcd2',
        textSecondary: '#999999',
        inputLabel: '#4e5a6e',
        tagLabel: '#95aed8',
        searchInput: '#f2f4fa',
        searchText: '#96a8b6',
        white: '#fff',
        mewBg: '#151a29',
        black: '#000',
        expandHeader: '#184f90',
        titlePrimary: '#95aed8',
        titleSecondary: '#4E5A6E',
        textPrimary: '#707D9E',
        textPrimaryModule: '#95aed8',
        textSecondaryModule: '#95aed8',
        primary: '#05c0a5',
        blue500: '#72cce9',
        basic: '#FFFFFF',
        success: '#2cc479',
        error: {
          base: '#ff445b',
          lighten1: '#ffd7dc',
          lighten2: '#e96071'
        },
        warning: {
          base: baseColors.asphalt5,
          darken1: '#f5a623'
        },
        disabled: '#1f2b42',
        tableHeader: '#0f1320',
        selectHeaderBg: '#F8FAFC',
        selectBorder: '#F1F1F1',
        maxButton: '#F6F8FD',
        textBlack: '#202124',
        textBlack2: '#5F6368',
        buttonSelect: '#D7F5F4',
        blue100: '#F3F5FB',
        surface: '#192133' //name from figma
      }
    }
  }
};
