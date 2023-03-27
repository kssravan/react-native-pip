//
//  PipViewManager.m
//  NativeModuleiOSPIP
//
//  Created by Sravan Kumar Kandukuru on 25/03/23.
//

#import "React/RCTViewManager.h"
#import "React/RCTUIManager.h"

@interface RCT_EXTERN_MODULE(PipViewManager, RCTViewManager)

RCT_EXTERN_METHOD(
  updateFromManager:(nonnull NSNumber *)node
  interval:(double)interval
)

@end
