// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// 원본: ui-library/src/assets/icons/*.svg — 모양은 그대로, 색은 그릴 때 tint 로 준다.

package com.s1.designsystem

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.PathParser
import androidx.compose.ui.unit.dp

object S1Icons {
    /** check.svg (16×16) */
    val check: ImageVector by lazy {
        ImageVector.Builder(
            name = "check",
            defaultWidth = 16f.dp,
            defaultHeight = 16f.dp,
            viewportWidth = 16f,
            viewportHeight = 16f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 2.9375 8 L 6.1325 11.375 L 13.0625 4.625").toNodes(),
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.5f,
                strokeLineCap = StrokeCap.Butt,
                strokeLineJoin = StrokeJoin.Round
            )
            .build()
    }

    /** chevron.svg (24×24) */
    val chevron: ImageVector by lazy {
        ImageVector.Builder(
            name = "chevron",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 10.375 7.75 L 14.625 12 L 10.375 16.25").toNodes(),
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1f,
                strokeLineCap = StrokeCap.Square,
                strokeLineJoin = StrokeJoin.Miter
            )
            .build()
    }

    /** close.svg (24×24) */
    val close: ImageVector by lazy {
        ImageVector.Builder(
            name = "close",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 4.7231 20 L 11.9949 12.718 L 19.2769 20 L 20 19.2769 L 12.718 11.9949 L 20 4.7231 L 19.2769 4 L 11.9949 11.282 L 4.7231 4 L 4 4.7231 L 11.282 11.9949 L 4 19.2769 L 4.7231 20 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** eye_hide.svg (24×24) */
    val eyeHide: ImageVector by lazy {
        ImageVector.Builder(
            name = "eye_hide",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 11.9952 6.6395 C 11.006 6.6395 10.0368 6.7694 9.1276 7.0092 L 9.9769 7.8585 C 10.6363 7.7286 11.3057 7.6387 12.0052 7.6387 C 15.4622 7.6387 18.5396 9.3472 19.9384 12.005 C 19.2989 13.214 18.2998 14.2231 17.0808 14.9625 L 17.8002 15.6819 C 19.1591 14.8026 20.2581 13.6336 20.9475 12.2148 C 21.0175 12.0749 21.0175 11.9151 20.9475 11.7852 C 19.4488 8.6578 15.9318 6.6395 12.0052 6.6395 H 11.9952 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .addPath(
                pathData = PathParser().parsePathString("M 11.9948 16.361 C 8.5378 16.361 5.4604 14.6524 4.0616 11.9947 C 4.7011 10.7857 5.7002 9.7766 6.9192 9.0372 L 6.1998 8.3178 C 4.8409 9.1971 3.7319 10.3661 3.0525 11.7848 C 2.9825 11.9247 2.9825 12.0846 3.0525 12.2145 C 4.5612 15.3418 8.0682 17.3601 11.9948 17.3601 C 12.984 17.3601 13.9532 17.2302 14.8624 16.9904 L 14.0131 16.1411 C 13.3537 16.271 12.6843 16.361 11.9849 16.361 H 11.9948 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .addPath(
                pathData = PathParser().parsePathString("M 12.9245 15.0521 L 8.9379 11.0655 C 8.848 11.3652 8.788 11.6749 8.788 11.9947 C 8.788 13.7632 10.2268 15.2019 11.9953 15.2019 C 12.325 15.2019 12.6348 15.142 12.9245 15.0521 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .addPath(
                pathData = PathParser().parsePathString("M 15.2019 11.9944 C 15.2019 10.2259 13.7631 8.7871 11.9946 8.7871 C 11.6649 8.7871 11.3552 8.8471 11.0654 8.937 L 15.052 12.9236 C 15.1419 12.6239 15.2019 12.3141 15.2019 11.9944 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .addPath(
                pathData = PathParser().parsePathString("M 16.1512 15.4518 L 14.5825 13.8731 L 10.1163 9.4169 L 8.8474 8.148 L 8.068 7.3587 L 5.3503 4.651 L 4.6509 5.3604 L 7.0889 7.7983 L 7.8382 8.5477 L 9.4069 10.1164 L 13.8731 14.5825 L 15.142 15.8515 L 15.9214 16.6308 L 18.639 19.3485 L 19.3384 18.6391 L 16.9005 16.1912 L 16.1512 15.4518 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** eye_show.svg (24×24) */
    val eyeShow: ImageVector by lazy {
        ImageVector.Builder(
            name = "eye_show",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 12 6.636 C 8.0711 6.636 4.5521 8.6554 3.0525 11.7846 C 2.9825 11.9245 2.9825 12.0845 3.0525 12.2144 C 4.5521 15.3436 8.0711 17.363 12 17.363 C 15.9289 17.363 19.4379 15.3436 20.9475 12.2144 C 21.0175 12.0745 21.0175 11.9145 20.9475 11.7846 C 19.4379 8.6554 15.9289 6.636 12 6.636 Z M 12 16.3633 C 8.541 16.3633 5.4618 14.6538 4.0622 11.9945 C 5.4618 9.3453 8.541 7.6357 12 7.6357 C 15.459 7.6357 18.5382 9.3453 19.9378 12.0045 C 18.5382 14.6638 15.459 16.3733 12 16.3733 V 16.3633 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .addPath(
                pathData = PathParser().parsePathString("M 12.0005 15.2138 C 13.7728 15.2138 15.2096 13.777 15.2096 12.0047 C 15.2096 10.2323 13.7728 8.7956 12.0005 8.7956 C 10.2281 8.7956 8.7914 10.2323 8.7914 12.0047 C 8.7914 13.777 10.2281 15.2138 12.0005 15.2138 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** mobile-header-arrow-down.svg (24×24) */
    val mobileHeaderArrowDown: ImageVector by lazy {
        ImageVector.Builder(
            name = "mobile-header-arrow-down",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 10.375 7.75 L 14.625 12 L 10.375 16.25").toNodes(),
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1f,
                strokeLineCap = StrokeCap.Square,
                strokeLineJoin = StrokeJoin.Miter
            )
            .build()
    }

    /** mobile-header-back.svg (24×24) */
    val mobileHeaderBack: ImageVector by lazy {
        ImageVector.Builder(
            name = "mobile-header-back",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 11.3109 4.944 L 10.5806 4.2137 L 3.1543 11.64 C 3.0617 11.7326 3 11.8663 3 12 C 3 12.1337 3.0514 12.2674 3.1543 12.36 L 10.5909 19.7863 L 11.3211 19.056 L 4.7589 12.5246 H 21 V 11.496 H 4.7589 L 11.3109 4.944 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** mobile-header-close.svg (24×24) */
    val mobileHeaderClose: ImageVector by lazy {
        ImageVector.Builder(
            name = "mobile-header-close",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 4.7231 20 L 11.9949 12.718 L 19.2769 20 L 20 19.2769 L 12.718 11.9949 L 20 4.7231 L 19.2769 4 L 11.9949 11.282 L 4.7231 4 L 4 4.7231 L 11.282 11.9949 L 4 19.2769 L 4.7231 20 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** mobile-header-notification.svg (24×24) */
    val mobileHeaderNotification: ImageVector by lazy {
        ImageVector.Builder(
            name = "mobile-header-notification",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 20.7753 16.5819 L 18.3146 13.11 V 9.6043 C 18.3146 9.6043 18.3034 9.5032 18.3034 9.4583 C 18.1349 9.5706 17.9439 9.6493 17.7528 9.7167 C 17.5731 9.7841 17.382 9.8178 17.191 9.8403 V 13.2898 C 17.191 13.4021 17.2247 13.5145 17.2922 13.6156 L 19.809 17.1662 L 14.3708 17.1887 H 13.7416 H 13 H 10.9663 H 10.2247 H 9.5843 L 4.1123 17.2111 L 6.6741 13.5931 C 6.7416 13.5032 6.7753 13.3796 6.7753 13.2673 V 9.3347 C 6.7753 7.874 7.3932 6.4695 8.4831 5.4807 C 9.4494 4.5931 10.6854 4.1212 11.9775 4.1212 C 12.1461 4.1212 12.3258 4.1212 12.4944 4.1436 C 13.4607 4.2335 14.3483 4.6268 15.0899 5.2111 C 15.236 5.0762 15.3933 4.9639 15.5618 4.874 C 15.7304 4.7729 15.9214 4.6942 16.1124 4.638 C 15.1461 3.7616 13.9438 3.1549 12.5955 3.0313 C 10.7865 2.8627 9.0562 3.4358 7.7191 4.6493 C 6.4045 5.8515 5.6517 7.5594 5.6517 9.3347 V 13.0875 L 3.2022 16.5819 C 2.9662 16.919 2.9325 17.346 3.1236 17.7055 C 3.3146 18.0651 3.6854 18.2898 4.0899 18.2898 H 9.3371 C 9.3371 18.2898 9.3371 18.3235 9.3371 18.3347 C 9.3371 19.7954 10.5281 20.9977 12 20.9977 C 13.4719 20.9977 14.6629 19.8066 14.6629 18.3347 C 14.6629 18.3235 14.6629 18.301 14.6629 18.2898 H 19.9102 C 20.3146 18.2898 20.6854 18.0651 20.8764 17.7055 C 21.0675 17.346 21.0338 16.9078 20.7978 16.5819 H 20.7753 Z M 13.5281 18.3347 C 13.5281 19.1774 12.8427 19.8741 11.9888 19.8741 C 11.1348 19.8741 10.4494 19.1887 10.4494 18.3347 C 10.4494 18.3235 10.4494 18.301 10.4494 18.2898 H 13.5169 C 13.5169 18.2898 13.5169 18.3235 13.5169 18.3347 H 13.5281 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .addPath(
                pathData = PathParser().parsePathString("M 16.8773 5.3791 C 16.8773 5.3791 16.8323 5.3791 16.8098 5.3791 C 16.5964 5.3791 16.3941 5.424 16.2031 5.5027 C 16.0233 5.5701 15.8548 5.6825 15.7087 5.8061 C 15.3042 6.1431 15.0458 6.6375 15.0458 7.1993 C 15.0458 8.2105 15.866 9.0196 16.866 9.0196 C 16.9559 9.0196 17.0458 9.0083 17.1245 8.9971 C 17.3155 8.9634 17.5065 8.9072 17.675 8.8285 C 17.8773 8.7274 18.0458 8.6038 18.2031 8.4353 C 18.5065 8.1094 18.6975 7.6712 18.6975 7.1993 C 18.6975 6.1881 17.8773 5.3791 16.8773 5.3791 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** mobile-header-notification-accent.svg (24×24) */
    val mobileHeaderNotificationAccent: ImageVector by lazy {
        ImageVector.Builder(
            name = "mobile-header-notification-accent",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 16.8773 5.3791 C 16.8773 5.3791 16.8323 5.3791 16.8098 5.3791 C 16.5964 5.3791 16.3941 5.424 16.2031 5.5027 C 16.0233 5.5701 15.8548 5.6825 15.7087 5.8061 C 15.3042 6.1431 15.0458 6.6375 15.0458 7.1993 C 15.0458 8.2105 15.866 9.0196 16.866 9.0196 C 16.9559 9.0196 17.0458 9.0083 17.1245 8.9971 C 17.3155 8.9634 17.5065 8.9072 17.675 8.8285 C 17.8773 8.7274 18.0458 8.6038 18.2031 8.4353 C 18.5065 8.1094 18.6975 7.6712 18.6975 7.1993 C 18.6975 6.1881 17.8773 5.3791 16.8773 5.3791 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** mobile-nav-home.svg (24×24) */
    val mobileNavHome: ImageVector by lazy {
        ImageVector.Builder(
            name = "mobile-nav-home",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 11.7031 4.0905 L 3 10.2338 L 3.5939 11.0734 L 5.8567 9.4761 V 20.0017 H 18.1433 V 9.4761 L 20.4061 11.0734 L 21 10.2338 L 12.2969 4.0905 C 12.1229 3.9676 11.8874 3.9676 11.7031 4.0905 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** nav-notification.svg (24×24) */
    val navNotification: ImageVector by lazy {
        ImageVector.Builder(
            name = "nav-notification",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 12.0002 20.9998 C 13.1522 20.9998 14.0882 20.1238 14.2202 19.0078 H 9.7922 C 9.9122 20.1238 10.8602 20.9998 12.0122 20.9998 H 12.0002 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .addPath(
                pathData = PathParser().parsePathString("M 20.8914 17.22 L 18.1554 13.356 V 9.42 C 18.1554 6.204 15.8034 3.336 12.5994 3.024 C 12.3954 3 12.1914 3 11.9994 3 C 8.5914 3 5.8434 5.76 5.8434 9.156 V 13.356 L 3.1074 17.22 C 2.8434 17.592 3.1074 18.108 3.5634 18.108 H 20.4354 C 20.8914 18.108 21.1554 17.592 20.8914 17.22 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** nav-search.svg (24×24) */
    val navSearch: ImageVector by lazy {
        ImageVector.Builder(
            name = "nav-search",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 11.1654 18.8592 C 13.001 18.8562 14.7735 18.1861 16.1552 16.9726 L 20.8472 21.6221 L 21.5762 20.8901 L 16.9149 16.2097 C 18.044 14.8921 18.6904 13.2265 18.7469 11.4892 C 18.8034 9.7519 18.2665 8.0475 17.2254 6.6588 C 16.1843 5.2701 14.7016 4.2805 13.0233 3.8545 C 11.3451 3.4284 9.5722 3.5914 7.9989 4.3164 C 6.4255 5.0414 5.1464 6.2848 4.3738 7.8403 C 3.6012 9.3958 3.3815 11.1698 3.7513 12.8679 C 4.121 14.5659 5.0579 16.086 6.4065 17.1758 C 7.7551 18.2656 9.4343 18.8596 11.1654 18.8592 Z M 11.1654 4.6427 C 12.4658 4.6407 13.7377 5.0261 14.8198 5.7504 C 15.902 6.4746 16.7458 7.5049 17.2444 8.7109 C 17.743 9.917 17.874 11.2445 17.6208 12.5253 C 17.3676 13.8061 16.7415 14.9827 15.822 15.9061 C 14.9024 16.8294 13.7306 17.458 12.455 17.7123 C 11.1794 17.9665 9.8574 17.835 8.6563 17.3343 C 7.4552 16.8337 6.4291 15.9864 5.7078 14.8998 C 4.9866 13.8132 4.6027 12.5361 4.6047 11.2303 C 4.602 10.363 4.7696 9.5037 5.098 8.7014 C 5.4264 7.8992 5.909 7.1699 6.5184 6.5552 C 7.1277 5.9405 7.8518 5.4524 8.6492 5.1189 C 9.4466 4.7855 10.3016 4.6131 11.1654 4.6118 V 4.6427 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** nav-settings.svg (24×24) */
    val navSettings: ImageVector by lazy {
        ImageVector.Builder(
            name = "nav-settings",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 3 12 C 3 12.742 3.0954 13.4629 3.2756 14.1625 H 5.47 C 5.7668 15.0636 6.2438 15.8692 6.8587 16.5583 L 5.7456 18.4664 C 6.2544 18.9646 6.8269 19.4099 7.4735 19.7915 C 8.1201 20.1625 8.788 20.4381 9.477 20.6396 L 10.5795 18.742 C 11.0353 18.8374 11.5124 18.8904 12 18.8904 C 12.4876 18.8904 12.9647 18.8374 13.4205 18.742 L 14.523 20.6396 C 15.212 20.4381 15.8799 20.1625 16.5265 19.7915 C 17.1731 19.4205 17.7456 18.9646 18.2544 18.4664 L 17.1413 16.5583 C 17.7562 15.8692 18.2332 15.053 18.53 14.1625 H 20.7244 C 20.894 13.4735 21 12.7526 21 12 C 21 11.2473 20.9046 10.5371 20.7244 9.8374 H 18.53 C 18.2332 8.9364 17.7562 8.1307 17.1413 7.4417 L 18.2544 5.5335 C 17.7456 5.0353 17.1731 4.5901 16.5265 4.2085 C 15.8799 3.8268 15.212 3.5618 14.523 3.3604 L 13.4205 5.2579 C 12.9647 5.1625 12.4876 5.1095 11.9894 5.1095 C 11.4912 5.1095 11.0247 5.1625 10.5689 5.2579 L 9.4664 3.3604 C 8.7774 3.5618 8.1095 3.8374 7.4629 4.2085 C 6.8163 4.5795 6.2438 5.0353 5.735 5.5335 L 6.8481 7.4417 C 6.2332 8.1307 5.7562 8.947 5.4594 9.8374 H 3.2756 C 3.106 10.5265 3 11.2473 3 12 Z M 12.0106 9.8798 C 13.1767 9.8798 14.1307 10.8339 14.1307 12 C 14.1307 13.1661 13.1767 14.1201 12.0106 14.1201 C 10.8445 14.1201 9.8905 13.1661 9.8905 12 C 9.8905 10.8339 10.8445 9.8798 12.0106 9.8798 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** remove.svg (24×24) */
    val remove: ImageVector by lazy {
        ImageVector.Builder(
            name = "remove",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 20 12 C 20 7.5859 16.4141 4 12 4 C 7.5859 4 4 7.5859 4 12 C 4 16.4141 7.5859 20 12 20 C 16.4141 20 20 16.4141 20 12 Z M 12 19.0588 C 8.1035 19.0588 4.9412 15.8965 4.9412 12 C 4.9412 8.1035 8.1035 4.9412 12 4.9412 C 15.8965 4.9412 19.0588 8.1035 19.0588 12 C 19.0588 15.8965 15.8965 19.0588 12 19.0588 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .addPath(
                pathData = PathParser().parsePathString("M 9.5 9.5 L 14.8333 14.8333").toNodes(),
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.5f,
                strokeLineCap = StrokeCap.Butt,
                strokeLineJoin = StrokeJoin.Round
            )
            .addPath(
                pathData = PathParser().parsePathString("M 14.8333 9.5 L 9.5 14.8333").toNodes(),
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.5f,
                strokeLineCap = StrokeCap.Butt,
                strokeLineJoin = StrokeJoin.Round
            )
            .build()
    }

    /** search.svg (24×24) */
    val search: ImageVector by lazy {
        ImageVector.Builder(
            name = "search",
            defaultWidth = 24f.dp,
            defaultHeight = 24f.dp,
            viewportWidth = 24f,
            viewportHeight = 24f
        )
            .addPath(
                pathData = PathParser().parsePathString("M 11.1654 18.8592 C 13.001 18.8562 14.7735 18.1861 16.1552 16.9726 L 20.8472 21.6221 L 21.5762 20.8901 L 16.9149 16.2097 C 18.044 14.8921 18.6904 13.2265 18.7469 11.4892 C 18.8034 9.7519 18.2665 8.0475 17.2254 6.6588 C 16.1843 5.2701 14.7016 4.2805 13.0233 3.8545 C 11.3451 3.4284 9.5722 3.5914 7.9989 4.3164 C 6.4255 5.0414 5.1464 6.2848 4.3738 7.8403 C 3.6012 9.3958 3.3815 11.1698 3.7513 12.8679 C 4.121 14.5659 5.0579 16.086 6.4065 17.1758 C 7.7551 18.2656 9.4343 18.8596 11.1654 18.8592 V 18.8592 Z M 11.1654 4.6427 C 12.4658 4.6407 13.7377 5.0261 14.8198 5.7504 C 15.902 6.4746 16.7458 7.5049 17.2444 8.7109 C 17.743 9.917 17.874 11.2445 17.6208 12.5253 C 17.3676 13.8061 16.7415 14.9827 15.822 15.9061 C 14.9024 16.8294 13.7306 17.458 12.455 17.7123 C 11.1794 17.9665 9.8574 17.835 8.6563 17.3343 C 7.4552 16.8337 6.4291 15.9864 5.7078 14.8998 C 4.9866 13.8132 4.6027 12.5361 4.6047 11.2303 C 4.602 10.363 4.7696 9.5037 5.098 8.7014 C 5.4264 7.8992 5.909 7.1699 6.5184 6.5552 C 7.1277 5.9405 7.8518 5.4524 8.6492 5.1189 C 9.4466 4.7855 10.3016 4.6131 11.1654 4.6118 V 4.6427 Z").toNodes(),
                fill = SolidColor(Color.Black)
            )
            .build()
    }

    /** 배포본이 이름으로 가리키는 아이콘을 찾는다(스타일 표의 icon 값). */
    fun byName(name: String): ImageVector = when (name) {
        "check" -> check
        "chevron" -> chevron
        "close" -> close
        "eye_hide" -> eyeHide
        "eye_show" -> eyeShow
        "mobile-header-arrow-down" -> mobileHeaderArrowDown
        "mobile-header-back" -> mobileHeaderBack
        "mobile-header-close" -> mobileHeaderClose
        "mobile-header-notification" -> mobileHeaderNotification
        "mobile-header-notification-accent" -> mobileHeaderNotificationAccent
        "mobile-nav-home" -> mobileNavHome
        "nav-notification" -> navNotification
        "nav-search" -> navSearch
        "nav-settings" -> navSettings
        "remove" -> remove
        "search" -> search
        else -> error("[s1] 배포본에 없는 아이콘: $name")
    }
}
