//
//  PipViewManager.swift
//  NativeModuleiOSPIP
//
//  Created by Sravan Kumar Kandukuru on 25/03/23.
//

import Foundation

@objc(PipViewManager)
class PipViewManager: RCTViewManager {
    
  override public func view() -> UIView! {
    return PipView()
  }
   
  @objc func updateFromManager(_ node: NSNumber, interval: Double) {
    
    DispatchQueue.main.async {                                
      let component = self.bridge.uiManager.view(             
        forReactTag: node                                     
      ) as! PipView                                       
      component.startPictureInPicture(withRefreshInterval: interval)                          
    }
  }
  /**
     This manager acts as a singleton owner of all instances of this view. This method will allow us retrive the instance
     view from the tag.
     */
    func view(for node: NSNumber) -> PipView? {
      var component: PipView? = nil
      DispatchQueue.main.sync {
        component = bridge.uiManager.view(forReactTag: node) as? PipView
      }
      return component
    }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true;
  }
  
}
