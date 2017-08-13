/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../../src/pages/mobile/mobile.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from 'ionic-angular/index';
import * as import9 from '@angular/common/src/localization';
import * as import10 from 'ionic-angular/platform/dom-controller';
import * as import11 from 'ionic-angular/components/menu/menu-controller';
import * as import12 from 'ionic-angular/components/app/app';
import * as import13 from 'ionic-angular/gestures/gesture-controller';
import * as import14 from '@angular/core/src/application_init';
import * as import15 from '@angular/core/src/testability/testability';
import * as import16 from '@angular/core/src/application_ref';
import * as import17 from '@angular/core/src/linker/compiler';
import * as import18 from 'ionic-angular/gestures/gesture-config';
import * as import19 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import20 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import21 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import22 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import23 from '@angular/core/src/animation/animation_queue';
import * as import24 from '@angular/core/src/linker/view_utils';
import * as import25 from '@angular/platform-browser/src/browser/title';
import * as import26 from '@angular/http/src/backends/browser_xhr';
import * as import27 from '@angular/http/src/base_response_options';
import * as import28 from '@angular/http/src/backends/xhr_backend';
import * as import29 from '@angular/http/src/base_request_options';
import * as import30 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import31 from '@angular/forms/src/form_builder';
import * as import32 from 'ionic-angular/components/action-sheet/action-sheet';
import * as import33 from 'ionic-angular/components/alert/alert';
import * as import34 from 'ionic-angular/util/events';
import * as import35 from 'ionic-angular/util/form';
import * as import36 from 'ionic-angular/tap-click/haptic';
import * as import37 from 'ionic-angular/platform/keyboard';
import * as import38 from 'ionic-angular/components/loading/loading';
import * as import39 from '@angular/common/src/location/location';
import * as import40 from 'ionic-angular/components/modal/modal';
import * as import41 from 'ionic-angular/components/picker/picker';
import * as import42 from 'ionic-angular/components/popover/popover';
import * as import43 from 'ionic-angular/tap-click/tap-click';
import * as import44 from 'ionic-angular/components/toast/toast';
import * as import45 from 'ionic-angular/transitions/transition-controller';
import * as import46 from '@angular/core/src/di/injector';
import * as import47 from '../../../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory';
import * as import48 from '../../../node_modules/ionic-angular/components/alert/alert-component.ngfactory';
import * as import49 from '../../../node_modules/ionic-angular/components/app/app-root.ngfactory';
import * as import50 from '../../../node_modules/ionic-angular/components/loading/loading-component.ngfactory';
import * as import51 from '../../../node_modules/ionic-angular/components/modal/modal-component.ngfactory';
import * as import52 from '../../../node_modules/ionic-angular/components/picker/picker-component.ngfactory';
import * as import53 from '../../../node_modules/ionic-angular/components/popover/popover-component.ngfactory';
import * as import54 from '../../../node_modules/ionic-angular/components/toast/toast-component.ngfactory';
import * as import55 from './login/login.ngfactory';
import * as import56 from '@angular/core/src/i18n/tokens';
import * as import57 from '@angular/core/src/application_tokens';
import * as import58 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import59 from '@angular/platform-browser/src/dom/events/key_events';
import * as import60 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import61 from '@angular/core/src/zone/ng_zone';
import * as import62 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import63 from '../../../../src/pages/mobile/login/login';
import * as import64 from '@angular/common/src/location/platform_location';
import * as import65 from '@angular/common/src/location/location_strategy';
import * as import66 from 'ionic-angular/navigation/url-serializer';
import * as import67 from 'ionic-angular/navigation/deep-linker';
import * as import68 from 'ionic-angular/platform/platform-registry';
import * as import69 from 'ionic-angular/platform/platform';
import * as import70 from 'ionic-angular/config/config';
import * as import71 from 'ionic-angular/config/mode-registry';
import * as import72 from 'ionic-angular/transitions/transition-registry';
import * as import73 from '@angular/core/src/console';
import * as import74 from '@angular/core/src/error_handler';
import * as import75 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import76 from '@angular/platform-browser/src/dom/animation_driver';
import * as import77 from '@angular/core/src/render/api';
import * as import78 from '@angular/core/src/security';
import * as import79 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import80 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import81 from '@angular/http/src/interfaces';
import * as import82 from '@angular/http/src/http';
import * as import83 from 'ionic-angular/components/app/app-root';
class MobileInfoModuleInjector extends import0.NgModuleInjector<import1.MobileInfoModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _HttpModule_3:import5.HttpModule;
  _InternalFormsSharedModule_4:import6.InternalFormsSharedModule;
  _FormsModule_5:import7.FormsModule;
  _ReactiveFormsModule_6:import7.ReactiveFormsModule;
  _IonicModule_7:import8.IonicModule;
  _MobileInfoModule_8:import1.MobileInfoModule;
  __LOCALE_ID_9:any;
  __NgLocalization_10:import9.NgLocaleLocalization;
  _ErrorHandler_11:any;
  _ConfigToken_12:any;
  _DOCUMENT_13:any;
  _PlatformConfigToken_14:any;
  _Platform_15:any;
  _Config_16:any;
  _DomController_17:import10.DomController;
  _MenuController_18:import11.MenuController;
  _App_19:import12.App;
  _GestureController_20:import13.GestureController;
  _APP_INITIALIZER_21:any[];
  _ApplicationInitStatus_22:import14.ApplicationInitStatus;
  _Testability_23:import15.Testability;
  _ApplicationRef__24:import16.ApplicationRef_;
  __ApplicationRef_25:any;
  __Compiler_26:import17.Compiler;
  __APP_ID_27:any;
  __HAMMER_GESTURE_CONFIG_28:import18.IonicGestureConfig;
  __EVENT_MANAGER_PLUGINS_29:any[];
  __EventManager_30:import19.EventManager;
  _DomSharedStylesHost_31:import20.DomSharedStylesHost;
  __AnimationDriver_32:any;
  __DomRootRenderer_33:import21.DomRootRenderer_;
  __RootRenderer_34:any;
  __DomSanitizer_35:import22.DomSanitizerImpl;
  __Sanitizer_36:any;
  __AnimationQueue_37:import23.AnimationQueue;
  __ViewUtils_38:import24.ViewUtils;
  __IterableDiffers_39:any;
  __KeyValueDiffers_40:any;
  __SharedStylesHost_41:any;
  __Title_42:import25.Title;
  __BrowserXhr_43:import26.BrowserXhr;
  __ResponseOptions_44:import27.BaseResponseOptions;
  __XSRFStrategy_45:any;
  __XHRBackend_46:import28.XHRBackend;
  __RequestOptions_47:import29.BaseRequestOptions;
  __Http_48:any;
  __RadioControlRegistry_49:import30.RadioControlRegistry;
  __FormBuilder_50:import31.FormBuilder;
  __AppRootToken_51:any;
  __DeepLinkConfigToken_52:any;
  __ActionSheetController_53:import32.ActionSheetController;
  __AlertController_54:import33.AlertController;
  __Events_55:import34.Events;
  __Form_56:import35.Form;
  __Haptic_57:import36.Haptic;
  __Keyboard_58:import37.Keyboard;
  __LoadingController_59:import38.LoadingController;
  __LocationStrategy_60:any;
  __Location_61:import39.Location;
  __ModalController_62:import40.ModalController;
  __PickerController_63:import41.PickerController;
  __PopoverController_64:import42.PopoverController;
  __TapClick_65:import43.TapClick;
  __ToastController_66:import44.ToastController;
  __TransitionController_67:import45.TransitionController;
  __UrlSerializer_68:any;
  __DeepLinker_69:any;
  constructor(parent:import46.Injector) {
    super(parent,[
      import47.ActionSheetCmpNgFactory,
      import48.AlertCmpNgFactory,
      import49.IonicAppNgFactory,
      import50.LoadingCmpNgFactory,
      import51.ModalCmpNgFactory,
      import52.PickerCmpNgFactory,
      import53.PopoverCmpNgFactory,
      import54.ToastCmpNgFactory,
      import55.LoginInfoPageNgFactory
    ]
    ,[import49.IonicAppNgFactory]);
  }
  get _LOCALE_ID_9():any {
    if ((this.__LOCALE_ID_9 == null)) { (this.__LOCALE_ID_9 = import3._localeFactory(this.parent.get(import56.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_9;
  }
  get _NgLocalization_10():import9.NgLocaleLocalization {
    if ((this.__NgLocalization_10 == null)) { (this.__NgLocalization_10 = new import9.NgLocaleLocalization(this._LOCALE_ID_9)); }
    return this.__NgLocalization_10;
  }
  get _ApplicationRef_25():any {
    if ((this.__ApplicationRef_25 == null)) { (this.__ApplicationRef_25 = this._ApplicationRef__24); }
    return this.__ApplicationRef_25;
  }
  get _Compiler_26():import17.Compiler {
    if ((this.__Compiler_26 == null)) { (this.__Compiler_26 = new import17.Compiler()); }
    return this.__Compiler_26;
  }
  get _APP_ID_27():any {
    if ((this.__APP_ID_27 == null)) { (this.__APP_ID_27 = import57._appIdRandomProviderFactory()); }
    return this.__APP_ID_27;
  }
  get _HAMMER_GESTURE_CONFIG_28():import18.IonicGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_28 == null)) { (this.__HAMMER_GESTURE_CONFIG_28 = new import18.IonicGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_28;
  }
  get _EVENT_MANAGER_PLUGINS_29():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_29 == null)) { (this.__EVENT_MANAGER_PLUGINS_29 = [
      new import58.DomEventsPlugin(),
      new import59.KeyEventsPlugin(),
      new import60.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_28)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_29;
  }
  get _EventManager_30():import19.EventManager {
    if ((this.__EventManager_30 == null)) { (this.__EventManager_30 = new import19.EventManager(this._EVENT_MANAGER_PLUGINS_29,this.parent.get(import61.NgZone))); }
    return this.__EventManager_30;
  }
  get _AnimationDriver_32():any {
    if ((this.__AnimationDriver_32 == null)) { (this.__AnimationDriver_32 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_32;
  }
  get _DomRootRenderer_33():import21.DomRootRenderer_ {
    if ((this.__DomRootRenderer_33 == null)) { (this.__DomRootRenderer_33 = new import21.DomRootRenderer_(this._DOCUMENT_13,this._EventManager_30,this._DomSharedStylesHost_31,this._AnimationDriver_32,this._APP_ID_27)); }
    return this.__DomRootRenderer_33;
  }
  get _RootRenderer_34():any {
    if ((this.__RootRenderer_34 == null)) { (this.__RootRenderer_34 = import62._createConditionalRootRenderer(this._DomRootRenderer_33,this.parent.get(import62.NgProbeToken,(null as any)),this.parent.get(import16.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_34;
  }
  get _DomSanitizer_35():import22.DomSanitizerImpl {
    if ((this.__DomSanitizer_35 == null)) { (this.__DomSanitizer_35 = new import22.DomSanitizerImpl()); }
    return this.__DomSanitizer_35;
  }
  get _Sanitizer_36():any {
    if ((this.__Sanitizer_36 == null)) { (this.__Sanitizer_36 = this._DomSanitizer_35); }
    return this.__Sanitizer_36;
  }
  get _AnimationQueue_37():import23.AnimationQueue {
    if ((this.__AnimationQueue_37 == null)) { (this.__AnimationQueue_37 = new import23.AnimationQueue(this.parent.get(import61.NgZone))); }
    return this.__AnimationQueue_37;
  }
  get _ViewUtils_38():import24.ViewUtils {
    if ((this.__ViewUtils_38 == null)) { (this.__ViewUtils_38 = new import24.ViewUtils(this._RootRenderer_34,this._Sanitizer_36,this._AnimationQueue_37)); }
    return this.__ViewUtils_38;
  }
  get _IterableDiffers_39():any {
    if ((this.__IterableDiffers_39 == null)) { (this.__IterableDiffers_39 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_39;
  }
  get _KeyValueDiffers_40():any {
    if ((this.__KeyValueDiffers_40 == null)) { (this.__KeyValueDiffers_40 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_40;
  }
  get _SharedStylesHost_41():any {
    if ((this.__SharedStylesHost_41 == null)) { (this.__SharedStylesHost_41 = this._DomSharedStylesHost_31); }
    return this.__SharedStylesHost_41;
  }
  get _Title_42():import25.Title {
    if ((this.__Title_42 == null)) { (this.__Title_42 = new import25.Title()); }
    return this.__Title_42;
  }
  get _BrowserXhr_43():import26.BrowserXhr {
    if ((this.__BrowserXhr_43 == null)) { (this.__BrowserXhr_43 = new import26.BrowserXhr()); }
    return this.__BrowserXhr_43;
  }
  get _ResponseOptions_44():import27.BaseResponseOptions {
    if ((this.__ResponseOptions_44 == null)) { (this.__ResponseOptions_44 = new import27.BaseResponseOptions()); }
    return this.__ResponseOptions_44;
  }
  get _XSRFStrategy_45():any {
    if ((this.__XSRFStrategy_45 == null)) { (this.__XSRFStrategy_45 = import5._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_45;
  }
  get _XHRBackend_46():import28.XHRBackend {
    if ((this.__XHRBackend_46 == null)) { (this.__XHRBackend_46 = new import28.XHRBackend(this._BrowserXhr_43,this._ResponseOptions_44,this._XSRFStrategy_45)); }
    return this.__XHRBackend_46;
  }
  get _RequestOptions_47():import29.BaseRequestOptions {
    if ((this.__RequestOptions_47 == null)) { (this.__RequestOptions_47 = new import29.BaseRequestOptions()); }
    return this.__RequestOptions_47;
  }
  get _Http_48():any {
    if ((this.__Http_48 == null)) { (this.__Http_48 = import5.httpFactory(this._XHRBackend_46,this._RequestOptions_47)); }
    return this.__Http_48;
  }
  get _RadioControlRegistry_49():import30.RadioControlRegistry {
    if ((this.__RadioControlRegistry_49 == null)) { (this.__RadioControlRegistry_49 = new import30.RadioControlRegistry()); }
    return this.__RadioControlRegistry_49;
  }
  get _FormBuilder_50():import31.FormBuilder {
    if ((this.__FormBuilder_50 == null)) { (this.__FormBuilder_50 = new import31.FormBuilder()); }
    return this.__FormBuilder_50;
  }
  get _AppRootToken_51():any {
    if ((this.__AppRootToken_51 == null)) { (this.__AppRootToken_51 = import63.LoginInfoPage); }
    return this.__AppRootToken_51;
  }
  get _DeepLinkConfigToken_52():any {
    if ((this.__DeepLinkConfigToken_52 == null)) { (this.__DeepLinkConfigToken_52 = (null as any)); }
    return this.__DeepLinkConfigToken_52;
  }
  get _ActionSheetController_53():import32.ActionSheetController {
    if ((this.__ActionSheetController_53 == null)) { (this.__ActionSheetController_53 = new import32.ActionSheetController(this._App_19)); }
    return this.__ActionSheetController_53;
  }
  get _AlertController_54():import33.AlertController {
    if ((this.__AlertController_54 == null)) { (this.__AlertController_54 = new import33.AlertController(this._App_19)); }
    return this.__AlertController_54;
  }
  get _Events_55():import34.Events {
    if ((this.__Events_55 == null)) { (this.__Events_55 = new import34.Events()); }
    return this.__Events_55;
  }
  get _Form_56():import35.Form {
    if ((this.__Form_56 == null)) { (this.__Form_56 = new import35.Form()); }
    return this.__Form_56;
  }
  get _Haptic_57():import36.Haptic {
    if ((this.__Haptic_57 == null)) { (this.__Haptic_57 = new import36.Haptic(this._Platform_15)); }
    return this.__Haptic_57;
  }
  get _Keyboard_58():import37.Keyboard {
    if ((this.__Keyboard_58 == null)) { (this.__Keyboard_58 = new import37.Keyboard(this._Config_16,this._Platform_15,this.parent.get(import61.NgZone),this._DomController_17)); }
    return this.__Keyboard_58;
  }
  get _LoadingController_59():import38.LoadingController {
    if ((this.__LoadingController_59 == null)) { (this.__LoadingController_59 = new import38.LoadingController(this._App_19)); }
    return this.__LoadingController_59;
  }
  get _LocationStrategy_60():any {
    if ((this.__LocationStrategy_60 == null)) { (this.__LocationStrategy_60 = import8.provideLocationStrategy(this.parent.get(import64.PlatformLocation),this.parent.get(import65.APP_BASE_HREF,(null as any)),this._Config_16)); }
    return this.__LocationStrategy_60;
  }
  get _Location_61():import39.Location {
    if ((this.__Location_61 == null)) { (this.__Location_61 = new import39.Location(this._LocationStrategy_60)); }
    return this.__Location_61;
  }
  get _ModalController_62():import40.ModalController {
    if ((this.__ModalController_62 == null)) { (this.__ModalController_62 = new import40.ModalController(this._App_19)); }
    return this.__ModalController_62;
  }
  get _PickerController_63():import41.PickerController {
    if ((this.__PickerController_63 == null)) { (this.__PickerController_63 = new import41.PickerController(this._App_19)); }
    return this.__PickerController_63;
  }
  get _PopoverController_64():import42.PopoverController {
    if ((this.__PopoverController_64 == null)) { (this.__PopoverController_64 = new import42.PopoverController(this._App_19)); }
    return this.__PopoverController_64;
  }
  get _TapClick_65():import43.TapClick {
    if ((this.__TapClick_65 == null)) { (this.__TapClick_65 = new import43.TapClick(this._Config_16,this._Platform_15,this._DomController_17,this._App_19,this.parent.get(import61.NgZone),this._GestureController_20)); }
    return this.__TapClick_65;
  }
  get _ToastController_66():import44.ToastController {
    if ((this.__ToastController_66 == null)) { (this.__ToastController_66 = new import44.ToastController(this._App_19)); }
    return this.__ToastController_66;
  }
  get _TransitionController_67():import45.TransitionController {
    if ((this.__TransitionController_67 == null)) { (this.__TransitionController_67 = new import45.TransitionController(this._Platform_15,this._Config_16)); }
    return this.__TransitionController_67;
  }
  get _UrlSerializer_68():any {
    if ((this.__UrlSerializer_68 == null)) { (this.__UrlSerializer_68 = import66.setupUrlSerializer(this._DeepLinkConfigToken_52)); }
    return this.__UrlSerializer_68;
  }
  get _DeepLinker_69():any {
    if ((this.__DeepLinker_69 == null)) { (this.__DeepLinker_69 = import67.setupDeepLinker(this._App_19,this._UrlSerializer_68,this._Location_61)); }
    return this.__DeepLinker_69;
  }
  createInternal():import1.MobileInfoModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._HttpModule_3 = new import5.HttpModule();
    this._InternalFormsSharedModule_4 = new import6.InternalFormsSharedModule();
    this._FormsModule_5 = new import7.FormsModule();
    this._ReactiveFormsModule_6 = new import7.ReactiveFormsModule();
    this._IonicModule_7 = new import8.IonicModule();
    this._MobileInfoModule_8 = new import1.MobileInfoModule();
    this._ErrorHandler_11 = import4.errorHandler();
    this._ConfigToken_12 = (null as any);
    this._DOCUMENT_13 = import4._document();
    this._PlatformConfigToken_14 = import68.providePlatformConfigs();
    this._Platform_15 = import69.setupPlatform(this._DOCUMENT_13,this._PlatformConfigToken_14,this.parent.get(import61.NgZone));
    this._Config_16 = import70.setupConfig(this._ConfigToken_12,this._Platform_15);
    this._DomController_17 = new import10.DomController(this._Platform_15);
    this._MenuController_18 = new import11.MenuController();
    this._App_19 = new import12.App(this._Config_16,this._Platform_15,this._MenuController_18);
    this._GestureController_20 = new import13.GestureController(this._App_19);
    this._APP_INITIALIZER_21 = [
      import71.registerModeConfigs(this._Config_16),
      import72.registerTransitions(this._Config_16),
      import34.setupProvideEvents(this._Platform_15,this._DomController_17),
      import43.setupTapClick(this._Config_16,this._Platform_15,this._DomController_17,this._App_19,this.parent.get(import61.NgZone),this._GestureController_20)
    ]
    ;
    this._ApplicationInitStatus_22 = new import14.ApplicationInitStatus(this._APP_INITIALIZER_21);
    this._Testability_23 = new import15.Testability(this.parent.get(import61.NgZone));
    this._ApplicationRef__24 = new import16.ApplicationRef_(this.parent.get(import61.NgZone),this.parent.get(import73.Console),this,this._ErrorHandler_11,this,this._ApplicationInitStatus_22,this.parent.get(import15.TestabilityRegistry,(null as any)),this._Testability_23);
    this._DomSharedStylesHost_31 = new import20.DomSharedStylesHost(this._DOCUMENT_13);
    return this._MobileInfoModule_8;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.HttpModule)) { return this._HttpModule_3; }
    if ((token === import6.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_4; }
    if ((token === import7.FormsModule)) { return this._FormsModule_5; }
    if ((token === import7.ReactiveFormsModule)) { return this._ReactiveFormsModule_6; }
    if ((token === import8.IonicModule)) { return this._IonicModule_7; }
    if ((token === import1.MobileInfoModule)) { return this._MobileInfoModule_8; }
    if ((token === import56.LOCALE_ID)) { return this._LOCALE_ID_9; }
    if ((token === import9.NgLocalization)) { return this._NgLocalization_10; }
    if ((token === import74.ErrorHandler)) { return this._ErrorHandler_11; }
    if ((token === import70.ConfigToken)) { return this._ConfigToken_12; }
    if ((token === import75.DOCUMENT)) { return this._DOCUMENT_13; }
    if ((token === import68.PlatformConfigToken)) { return this._PlatformConfigToken_14; }
    if ((token === import69.Platform)) { return this._Platform_15; }
    if ((token === import70.Config)) { return this._Config_16; }
    if ((token === import10.DomController)) { return this._DomController_17; }
    if ((token === import11.MenuController)) { return this._MenuController_18; }
    if ((token === import12.App)) { return this._App_19; }
    if ((token === import13.GestureController)) { return this._GestureController_20; }
    if ((token === import14.APP_INITIALIZER)) { return this._APP_INITIALIZER_21; }
    if ((token === import14.ApplicationInitStatus)) { return this._ApplicationInitStatus_22; }
    if ((token === import15.Testability)) { return this._Testability_23; }
    if ((token === import16.ApplicationRef_)) { return this._ApplicationRef__24; }
    if ((token === import16.ApplicationRef)) { return this._ApplicationRef_25; }
    if ((token === import17.Compiler)) { return this._Compiler_26; }
    if ((token === import57.APP_ID)) { return this._APP_ID_27; }
    if ((token === import60.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_28; }
    if ((token === import19.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_29; }
    if ((token === import19.EventManager)) { return this._EventManager_30; }
    if ((token === import20.DomSharedStylesHost)) { return this._DomSharedStylesHost_31; }
    if ((token === import76.AnimationDriver)) { return this._AnimationDriver_32; }
    if ((token === import21.DomRootRenderer)) { return this._DomRootRenderer_33; }
    if ((token === import77.RootRenderer)) { return this._RootRenderer_34; }
    if ((token === import22.DomSanitizer)) { return this._DomSanitizer_35; }
    if ((token === import78.Sanitizer)) { return this._Sanitizer_36; }
    if ((token === import23.AnimationQueue)) { return this._AnimationQueue_37; }
    if ((token === import24.ViewUtils)) { return this._ViewUtils_38; }
    if ((token === import79.IterableDiffers)) { return this._IterableDiffers_39; }
    if ((token === import80.KeyValueDiffers)) { return this._KeyValueDiffers_40; }
    if ((token === import20.SharedStylesHost)) { return this._SharedStylesHost_41; }
    if ((token === import25.Title)) { return this._Title_42; }
    if ((token === import26.BrowserXhr)) { return this._BrowserXhr_43; }
    if ((token === import27.ResponseOptions)) { return this._ResponseOptions_44; }
    if ((token === import81.XSRFStrategy)) { return this._XSRFStrategy_45; }
    if ((token === import28.XHRBackend)) { return this._XHRBackend_46; }
    if ((token === import29.RequestOptions)) { return this._RequestOptions_47; }
    if ((token === import82.Http)) { return this._Http_48; }
    if ((token === import30.RadioControlRegistry)) { return this._RadioControlRegistry_49; }
    if ((token === import31.FormBuilder)) { return this._FormBuilder_50; }
    if ((token === import83.AppRootToken)) { return this._AppRootToken_51; }
    if ((token === import66.DeepLinkConfigToken)) { return this._DeepLinkConfigToken_52; }
    if ((token === import32.ActionSheetController)) { return this._ActionSheetController_53; }
    if ((token === import33.AlertController)) { return this._AlertController_54; }
    if ((token === import34.Events)) { return this._Events_55; }
    if ((token === import35.Form)) { return this._Form_56; }
    if ((token === import36.Haptic)) { return this._Haptic_57; }
    if ((token === import37.Keyboard)) { return this._Keyboard_58; }
    if ((token === import38.LoadingController)) { return this._LoadingController_59; }
    if ((token === import65.LocationStrategy)) { return this._LocationStrategy_60; }
    if ((token === import39.Location)) { return this._Location_61; }
    if ((token === import40.ModalController)) { return this._ModalController_62; }
    if ((token === import41.PickerController)) { return this._PickerController_63; }
    if ((token === import42.PopoverController)) { return this._PopoverController_64; }
    if ((token === import43.TapClick)) { return this._TapClick_65; }
    if ((token === import44.ToastController)) { return this._ToastController_66; }
    if ((token === import45.TransitionController)) { return this._TransitionController_67; }
    if ((token === import66.UrlSerializer)) { return this._UrlSerializer_68; }
    if ((token === import67.DeepLinker)) { return this._DeepLinker_69; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__24.ngOnDestroy();
    this._DomSharedStylesHost_31.ngOnDestroy();
  }
}
export const MobileInfoModuleNgFactory:import0.NgModuleFactory<import1.MobileInfoModule> = new import0.NgModuleFactory(MobileInfoModuleInjector,import1.MobileInfoModule);