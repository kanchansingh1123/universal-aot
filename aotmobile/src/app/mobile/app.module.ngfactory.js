/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../../src/app/mobile/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from 'ionic-angular/index';
import * as import9 from '../../../../src/pages/mobile/mobile.module';
import * as import10 from '@angular/common/src/localization';
import * as import11 from 'ionic-angular/platform/dom-controller';
import * as import12 from 'ionic-angular/components/menu/menu-controller';
import * as import13 from 'ionic-angular/components/app/app';
import * as import14 from 'ionic-angular/gestures/gesture-controller';
import * as import15 from '@angular/core/src/application_init';
import * as import16 from '@angular/core/src/testability/testability';
import * as import17 from '@angular/core/src/application_ref';
import * as import18 from '@angular/core/src/linker/compiler';
import * as import19 from 'ionic-angular/gestures/gesture-config';
import * as import20 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import21 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import22 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import23 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import24 from '@angular/core/src/animation/animation_queue';
import * as import25 from '@angular/core/src/linker/view_utils';
import * as import26 from '@angular/platform-browser/src/browser/title';
import * as import27 from '@angular/http/src/backends/browser_xhr';
import * as import28 from '@angular/http/src/base_response_options';
import * as import29 from '@angular/http/src/backends/xhr_backend';
import * as import30 from '@angular/http/src/base_request_options';
import * as import31 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import32 from '@angular/forms/src/form_builder';
import * as import33 from 'ionic-angular/components/action-sheet/action-sheet';
import * as import34 from 'ionic-angular/components/alert/alert';
import * as import35 from 'ionic-angular/util/events';
import * as import36 from 'ionic-angular/util/form';
import * as import37 from 'ionic-angular/tap-click/haptic';
import * as import38 from 'ionic-angular/platform/keyboard';
import * as import39 from 'ionic-angular/components/loading/loading';
import * as import40 from '@angular/common/src/location/location';
import * as import41 from 'ionic-angular/components/modal/modal';
import * as import42 from 'ionic-angular/components/picker/picker';
import * as import43 from 'ionic-angular/components/popover/popover';
import * as import44 from 'ionic-angular/tap-click/tap-click';
import * as import45 from 'ionic-angular/components/toast/toast';
import * as import46 from 'ionic-angular/transitions/transition-controller';
import * as import48 from '../../../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory';
import * as import49 from '../../../node_modules/ionic-angular/components/alert/alert-component.ngfactory';
import * as import50 from '../../../node_modules/ionic-angular/components/app/app-root.ngfactory';
import * as import51 from '../../../node_modules/ionic-angular/components/loading/loading-component.ngfactory';
import * as import52 from '../../../node_modules/ionic-angular/components/modal/modal-component.ngfactory';
import * as import53 from '../../../node_modules/ionic-angular/components/picker/picker-component.ngfactory';
import * as import54 from '../../../node_modules/ionic-angular/components/popover/popover-component.ngfactory';
import * as import55 from '../../../node_modules/ionic-angular/components/toast/toast-component.ngfactory';
import * as import56 from '../../pages/mobile/login/login.ngfactory';
import * as import57 from './app.component.ngfactory';
import * as import58 from '@angular/core/src/i18n/tokens';
import * as import59 from '@angular/core/src/application_tokens';
import * as import60 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import61 from '@angular/platform-browser/src/dom/events/key_events';
import * as import62 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import63 from '@angular/core/src/zone/ng_zone';
import * as import64 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import65 from '../../../../src/app/mobile/app.component';
import * as import66 from '@angular/common/src/location/platform_location';
import * as import67 from '@angular/common/src/location/location_strategy';
import * as import68 from 'ionic-angular/navigation/url-serializer';
import * as import69 from 'ionic-angular/navigation/deep-linker';
import * as import70 from 'ionic-angular/platform/platform-registry';
import * as import71 from 'ionic-angular/platform/platform';
import * as import72 from 'ionic-angular/config/config';
import * as import73 from 'ionic-angular/config/mode-registry';
import * as import74 from 'ionic-angular/transitions/transition-registry';
import * as import75 from '@angular/core/src/console';
import * as import76 from '@angular/core/src/error_handler';
import * as import77 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import78 from '@angular/platform-browser/src/dom/animation_driver';
import * as import79 from '@angular/core/src/render/api';
import * as import80 from '@angular/core/src/security';
import * as import81 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import82 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import83 from '@angular/http/src/interfaces';
import * as import84 from '@angular/http/src/http';
import * as import85 from 'ionic-angular/components/app/app-root';
var MobileModuleInjector = (function (_super) {
    __extends(MobileModuleInjector, _super);
    function MobileModuleInjector(parent) {
        _super.call(this, parent, [
            import48.ActionSheetCmpNgFactory,
            import49.AlertCmpNgFactory,
            import50.IonicAppNgFactory,
            import51.LoadingCmpNgFactory,
            import52.ModalCmpNgFactory,
            import53.PickerCmpNgFactory,
            import54.PopoverCmpNgFactory,
            import55.ToastCmpNgFactory,
            import56.LoginInfoPageNgFactory,
            import57.MyAppNgFactory
        ], [import50.IonicAppNgFactory]);
    }
    Object.defineProperty(MobileModuleInjector.prototype, "_LOCALE_ID_10", {
        get: function () {
            if ((this.__LOCALE_ID_10 == null)) {
                (this.__LOCALE_ID_10 = import3._localeFactory(this.parent.get(import58.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_NgLocalization_11", {
        get: function () {
            if ((this.__NgLocalization_11 == null)) {
                (this.__NgLocalization_11 = new import10.NgLocaleLocalization(this._LOCALE_ID_10));
            }
            return this.__NgLocalization_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_ApplicationRef_26", {
        get: function () {
            if ((this.__ApplicationRef_26 == null)) {
                (this.__ApplicationRef_26 = this._ApplicationRef__25);
            }
            return this.__ApplicationRef_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_Compiler_27", {
        get: function () {
            if ((this.__Compiler_27 == null)) {
                (this.__Compiler_27 = new import18.Compiler());
            }
            return this.__Compiler_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_APP_ID_28", {
        get: function () {
            if ((this.__APP_ID_28 == null)) {
                (this.__APP_ID_28 = import59._appIdRandomProviderFactory());
            }
            return this.__APP_ID_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_29", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_29 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_29 = new import19.IonicGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_30", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_30 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_30 = [
                    new import60.DomEventsPlugin(),
                    new import61.KeyEventsPlugin(),
                    new import62.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_29)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_EventManager_31", {
        get: function () {
            if ((this.__EventManager_31 == null)) {
                (this.__EventManager_31 = new import20.EventManager(this._EVENT_MANAGER_PLUGINS_30, this.parent.get(import63.NgZone)));
            }
            return this.__EventManager_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_AnimationDriver_33", {
        get: function () {
            if ((this.__AnimationDriver_33 == null)) {
                (this.__AnimationDriver_33 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_DomRootRenderer_34", {
        get: function () {
            if ((this.__DomRootRenderer_34 == null)) {
                (this.__DomRootRenderer_34 = new import22.DomRootRenderer_(this._DOCUMENT_14, this._EventManager_31, this._DomSharedStylesHost_32, this._AnimationDriver_33, this._APP_ID_28));
            }
            return this.__DomRootRenderer_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_RootRenderer_35", {
        get: function () {
            if ((this.__RootRenderer_35 == null)) {
                (this.__RootRenderer_35 = import64._createConditionalRootRenderer(this._DomRootRenderer_34, this.parent.get(import64.NgProbeToken, null), this.parent.get(import17.NgProbeToken, null)));
            }
            return this.__RootRenderer_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_DomSanitizer_36", {
        get: function () {
            if ((this.__DomSanitizer_36 == null)) {
                (this.__DomSanitizer_36 = new import23.DomSanitizerImpl());
            }
            return this.__DomSanitizer_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_Sanitizer_37", {
        get: function () {
            if ((this.__Sanitizer_37 == null)) {
                (this.__Sanitizer_37 = this._DomSanitizer_36);
            }
            return this.__Sanitizer_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_AnimationQueue_38", {
        get: function () {
            if ((this.__AnimationQueue_38 == null)) {
                (this.__AnimationQueue_38 = new import24.AnimationQueue(this.parent.get(import63.NgZone)));
            }
            return this.__AnimationQueue_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_ViewUtils_39", {
        get: function () {
            if ((this.__ViewUtils_39 == null)) {
                (this.__ViewUtils_39 = new import25.ViewUtils(this._RootRenderer_35, this._Sanitizer_37, this._AnimationQueue_38));
            }
            return this.__ViewUtils_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_IterableDiffers_40", {
        get: function () {
            if ((this.__IterableDiffers_40 == null)) {
                (this.__IterableDiffers_40 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_KeyValueDiffers_41", {
        get: function () {
            if ((this.__KeyValueDiffers_41 == null)) {
                (this.__KeyValueDiffers_41 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_SharedStylesHost_42", {
        get: function () {
            if ((this.__SharedStylesHost_42 == null)) {
                (this.__SharedStylesHost_42 = this._DomSharedStylesHost_32);
            }
            return this.__SharedStylesHost_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_Title_43", {
        get: function () {
            if ((this.__Title_43 == null)) {
                (this.__Title_43 = new import26.Title());
            }
            return this.__Title_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_BrowserXhr_44", {
        get: function () {
            if ((this.__BrowserXhr_44 == null)) {
                (this.__BrowserXhr_44 = new import27.BrowserXhr());
            }
            return this.__BrowserXhr_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_ResponseOptions_45", {
        get: function () {
            if ((this.__ResponseOptions_45 == null)) {
                (this.__ResponseOptions_45 = new import28.BaseResponseOptions());
            }
            return this.__ResponseOptions_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_XSRFStrategy_46", {
        get: function () {
            if ((this.__XSRFStrategy_46 == null)) {
                (this.__XSRFStrategy_46 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_XHRBackend_47", {
        get: function () {
            if ((this.__XHRBackend_47 == null)) {
                (this.__XHRBackend_47 = new import29.XHRBackend(this._BrowserXhr_44, this._ResponseOptions_45, this._XSRFStrategy_46));
            }
            return this.__XHRBackend_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_RequestOptions_48", {
        get: function () {
            if ((this.__RequestOptions_48 == null)) {
                (this.__RequestOptions_48 = new import30.BaseRequestOptions());
            }
            return this.__RequestOptions_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_Http_49", {
        get: function () {
            if ((this.__Http_49 == null)) {
                (this.__Http_49 = import5.httpFactory(this._XHRBackend_47, this._RequestOptions_48));
            }
            return this.__Http_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_RadioControlRegistry_50", {
        get: function () {
            if ((this.__RadioControlRegistry_50 == null)) {
                (this.__RadioControlRegistry_50 = new import31.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_FormBuilder_51", {
        get: function () {
            if ((this.__FormBuilder_51 == null)) {
                (this.__FormBuilder_51 = new import32.FormBuilder());
            }
            return this.__FormBuilder_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_AppRootToken_52", {
        get: function () {
            if ((this.__AppRootToken_52 == null)) {
                (this.__AppRootToken_52 = import65.MyApp);
            }
            return this.__AppRootToken_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_DeepLinkConfigToken_53", {
        get: function () {
            if ((this.__DeepLinkConfigToken_53 == null)) {
                (this.__DeepLinkConfigToken_53 = null);
            }
            return this.__DeepLinkConfigToken_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_ActionSheetController_54", {
        get: function () {
            if ((this.__ActionSheetController_54 == null)) {
                (this.__ActionSheetController_54 = new import33.ActionSheetController(this._App_20));
            }
            return this.__ActionSheetController_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_AlertController_55", {
        get: function () {
            if ((this.__AlertController_55 == null)) {
                (this.__AlertController_55 = new import34.AlertController(this._App_20));
            }
            return this.__AlertController_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_Events_56", {
        get: function () {
            if ((this.__Events_56 == null)) {
                (this.__Events_56 = new import35.Events());
            }
            return this.__Events_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_Form_57", {
        get: function () {
            if ((this.__Form_57 == null)) {
                (this.__Form_57 = new import36.Form());
            }
            return this.__Form_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_Haptic_58", {
        get: function () {
            if ((this.__Haptic_58 == null)) {
                (this.__Haptic_58 = new import37.Haptic(this._Platform_16));
            }
            return this.__Haptic_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_Keyboard_59", {
        get: function () {
            if ((this.__Keyboard_59 == null)) {
                (this.__Keyboard_59 = new import38.Keyboard(this._Config_17, this._Platform_16, this.parent.get(import63.NgZone), this._DomController_18));
            }
            return this.__Keyboard_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_LoadingController_60", {
        get: function () {
            if ((this.__LoadingController_60 == null)) {
                (this.__LoadingController_60 = new import39.LoadingController(this._App_20));
            }
            return this.__LoadingController_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_LocationStrategy_61", {
        get: function () {
            if ((this.__LocationStrategy_61 == null)) {
                (this.__LocationStrategy_61 = import8.provideLocationStrategy(this.parent.get(import66.PlatformLocation), this.parent.get(import67.APP_BASE_HREF, null), this._Config_17));
            }
            return this.__LocationStrategy_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_Location_62", {
        get: function () {
            if ((this.__Location_62 == null)) {
                (this.__Location_62 = new import40.Location(this._LocationStrategy_61));
            }
            return this.__Location_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_ModalController_63", {
        get: function () {
            if ((this.__ModalController_63 == null)) {
                (this.__ModalController_63 = new import41.ModalController(this._App_20));
            }
            return this.__ModalController_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_PickerController_64", {
        get: function () {
            if ((this.__PickerController_64 == null)) {
                (this.__PickerController_64 = new import42.PickerController(this._App_20));
            }
            return this.__PickerController_64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_PopoverController_65", {
        get: function () {
            if ((this.__PopoverController_65 == null)) {
                (this.__PopoverController_65 = new import43.PopoverController(this._App_20));
            }
            return this.__PopoverController_65;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_TapClick_66", {
        get: function () {
            if ((this.__TapClick_66 == null)) {
                (this.__TapClick_66 = new import44.TapClick(this._Config_17, this._Platform_16, this._DomController_18, this._App_20, this.parent.get(import63.NgZone), this._GestureController_21));
            }
            return this.__TapClick_66;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_ToastController_67", {
        get: function () {
            if ((this.__ToastController_67 == null)) {
                (this.__ToastController_67 = new import45.ToastController(this._App_20));
            }
            return this.__ToastController_67;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_TransitionController_68", {
        get: function () {
            if ((this.__TransitionController_68 == null)) {
                (this.__TransitionController_68 = new import46.TransitionController(this._Platform_16, this._Config_17));
            }
            return this.__TransitionController_68;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_UrlSerializer_69", {
        get: function () {
            if ((this.__UrlSerializer_69 == null)) {
                (this.__UrlSerializer_69 = import68.setupUrlSerializer(this._DeepLinkConfigToken_53));
            }
            return this.__UrlSerializer_69;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileModuleInjector.prototype, "_DeepLinker_70", {
        get: function () {
            if ((this.__DeepLinker_70 == null)) {
                (this.__DeepLinker_70 = import69.setupDeepLinker(this._App_20, this._UrlSerializer_69, this._Location_62));
            }
            return this.__DeepLinker_70;
        },
        enumerable: true,
        configurable: true
    });
    MobileModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._InternalFormsSharedModule_4 = new import6.InternalFormsSharedModule();
        this._FormsModule_5 = new import7.FormsModule();
        this._ReactiveFormsModule_6 = new import7.ReactiveFormsModule();
        this._IonicModule_7 = new import8.IonicModule();
        this._MobileInfoModule_8 = new import9.MobileInfoModule();
        this._MobileModule_9 = new import1.MobileModule();
        this._ErrorHandler_12 = import4.errorHandler();
        this._ConfigToken_13 = null;
        this._DOCUMENT_14 = import4._document();
        this._PlatformConfigToken_15 = import70.providePlatformConfigs();
        this._Platform_16 = import71.setupPlatform(this._DOCUMENT_14, this._PlatformConfigToken_15, this.parent.get(import63.NgZone));
        this._Config_17 = import72.setupConfig(this._ConfigToken_13, this._Platform_16);
        this._DomController_18 = new import11.DomController(this._Platform_16);
        this._MenuController_19 = new import12.MenuController();
        this._App_20 = new import13.App(this._Config_17, this._Platform_16, this._MenuController_19);
        this._GestureController_21 = new import14.GestureController(this._App_20);
        this._APP_INITIALIZER_22 = [
            import73.registerModeConfigs(this._Config_17),
            import74.registerTransitions(this._Config_17),
            import35.setupProvideEvents(this._Platform_16, this._DomController_18),
            import44.setupTapClick(this._Config_17, this._Platform_16, this._DomController_18, this._App_20, this.parent.get(import63.NgZone), this._GestureController_21),
            import73.registerModeConfigs(this._Config_17),
            import74.registerTransitions(this._Config_17),
            import35.setupProvideEvents(this._Platform_16, this._DomController_18),
            import44.setupTapClick(this._Config_17, this._Platform_16, this._DomController_18, this._App_20, this.parent.get(import63.NgZone), this._GestureController_21)
        ];
        this._ApplicationInitStatus_23 = new import15.ApplicationInitStatus(this._APP_INITIALIZER_22);
        this._Testability_24 = new import16.Testability(this.parent.get(import63.NgZone));
        this._ApplicationRef__25 = new import17.ApplicationRef_(this.parent.get(import63.NgZone), this.parent.get(import75.Console), this, this._ErrorHandler_12, this, this._ApplicationInitStatus_23, this.parent.get(import16.TestabilityRegistry, null), this._Testability_24);
        this._DomSharedStylesHost_32 = new import21.DomSharedStylesHost(this._DOCUMENT_14);
        return this._MobileModule_9;
    };
    MobileModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_4;
        }
        if ((token === import7.FormsModule)) {
            return this._FormsModule_5;
        }
        if ((token === import7.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_6;
        }
        if ((token === import8.IonicModule)) {
            return this._IonicModule_7;
        }
        if ((token === import9.MobileInfoModule)) {
            return this._MobileInfoModule_8;
        }
        if ((token === import1.MobileModule)) {
            return this._MobileModule_9;
        }
        if ((token === import58.LOCALE_ID)) {
            return this._LOCALE_ID_10;
        }
        if ((token === import10.NgLocalization)) {
            return this._NgLocalization_11;
        }
        if ((token === import76.ErrorHandler)) {
            return this._ErrorHandler_12;
        }
        if ((token === import72.ConfigToken)) {
            return this._ConfigToken_13;
        }
        if ((token === import77.DOCUMENT)) {
            return this._DOCUMENT_14;
        }
        if ((token === import70.PlatformConfigToken)) {
            return this._PlatformConfigToken_15;
        }
        if ((token === import71.Platform)) {
            return this._Platform_16;
        }
        if ((token === import72.Config)) {
            return this._Config_17;
        }
        if ((token === import11.DomController)) {
            return this._DomController_18;
        }
        if ((token === import12.MenuController)) {
            return this._MenuController_19;
        }
        if ((token === import13.App)) {
            return this._App_20;
        }
        if ((token === import14.GestureController)) {
            return this._GestureController_21;
        }
        if ((token === import15.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_22;
        }
        if ((token === import15.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_23;
        }
        if ((token === import16.Testability)) {
            return this._Testability_24;
        }
        if ((token === import17.ApplicationRef_)) {
            return this._ApplicationRef__25;
        }
        if ((token === import17.ApplicationRef)) {
            return this._ApplicationRef_26;
        }
        if ((token === import18.Compiler)) {
            return this._Compiler_27;
        }
        if ((token === import59.APP_ID)) {
            return this._APP_ID_28;
        }
        if ((token === import62.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_29;
        }
        if ((token === import20.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_30;
        }
        if ((token === import20.EventManager)) {
            return this._EventManager_31;
        }
        if ((token === import21.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_32;
        }
        if ((token === import78.AnimationDriver)) {
            return this._AnimationDriver_33;
        }
        if ((token === import22.DomRootRenderer)) {
            return this._DomRootRenderer_34;
        }
        if ((token === import79.RootRenderer)) {
            return this._RootRenderer_35;
        }
        if ((token === import23.DomSanitizer)) {
            return this._DomSanitizer_36;
        }
        if ((token === import80.Sanitizer)) {
            return this._Sanitizer_37;
        }
        if ((token === import24.AnimationQueue)) {
            return this._AnimationQueue_38;
        }
        if ((token === import25.ViewUtils)) {
            return this._ViewUtils_39;
        }
        if ((token === import81.IterableDiffers)) {
            return this._IterableDiffers_40;
        }
        if ((token === import82.KeyValueDiffers)) {
            return this._KeyValueDiffers_41;
        }
        if ((token === import21.SharedStylesHost)) {
            return this._SharedStylesHost_42;
        }
        if ((token === import26.Title)) {
            return this._Title_43;
        }
        if ((token === import27.BrowserXhr)) {
            return this._BrowserXhr_44;
        }
        if ((token === import28.ResponseOptions)) {
            return this._ResponseOptions_45;
        }
        if ((token === import83.XSRFStrategy)) {
            return this._XSRFStrategy_46;
        }
        if ((token === import29.XHRBackend)) {
            return this._XHRBackend_47;
        }
        if ((token === import30.RequestOptions)) {
            return this._RequestOptions_48;
        }
        if ((token === import84.Http)) {
            return this._Http_49;
        }
        if ((token === import31.RadioControlRegistry)) {
            return this._RadioControlRegistry_50;
        }
        if ((token === import32.FormBuilder)) {
            return this._FormBuilder_51;
        }
        if ((token === import85.AppRootToken)) {
            return this._AppRootToken_52;
        }
        if ((token === import68.DeepLinkConfigToken)) {
            return this._DeepLinkConfigToken_53;
        }
        if ((token === import33.ActionSheetController)) {
            return this._ActionSheetController_54;
        }
        if ((token === import34.AlertController)) {
            return this._AlertController_55;
        }
        if ((token === import35.Events)) {
            return this._Events_56;
        }
        if ((token === import36.Form)) {
            return this._Form_57;
        }
        if ((token === import37.Haptic)) {
            return this._Haptic_58;
        }
        if ((token === import38.Keyboard)) {
            return this._Keyboard_59;
        }
        if ((token === import39.LoadingController)) {
            return this._LoadingController_60;
        }
        if ((token === import67.LocationStrategy)) {
            return this._LocationStrategy_61;
        }
        if ((token === import40.Location)) {
            return this._Location_62;
        }
        if ((token === import41.ModalController)) {
            return this._ModalController_63;
        }
        if ((token === import42.PickerController)) {
            return this._PickerController_64;
        }
        if ((token === import43.PopoverController)) {
            return this._PopoverController_65;
        }
        if ((token === import44.TapClick)) {
            return this._TapClick_66;
        }
        if ((token === import45.ToastController)) {
            return this._ToastController_67;
        }
        if ((token === import46.TransitionController)) {
            return this._TransitionController_68;
        }
        if ((token === import68.UrlSerializer)) {
            return this._UrlSerializer_69;
        }
        if ((token === import69.DeepLinker)) {
            return this._DeepLinker_70;
        }
        return notFoundResult;
    };
    MobileModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__25.ngOnDestroy();
        this._DomSharedStylesHost_32.ngOnDestroy();
    };
    return MobileModuleInjector;
}(import0.NgModuleInjector));
export var MobileModuleNgFactory = new import0.NgModuleFactory(MobileModuleInjector, import1.MobileModule);
//# sourceMappingURL=app.module.ngfactory.js.map